import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  PageTransition,
  staggerContainer,
  fadeInUp,
} from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import {
  Inbox,
  LogOut,
  Loader2,
  MailOpen,
  Mail,
  Lock,
  RefreshCw,
} from "lucide-react";
import type { Session } from "@supabase/supabase-js";

type ContactMessage = {
  id: string;
  name: string;
  email: string;
  message: string;
  is_read: boolean;
  created_at: string;
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export default function Admin() {
  useEffect(() => {
    document.title = "</>TIN | Admin";
  }, []);

  const [booting, setBooting] = useState(true);
  const [session, setSession] = useState<Session | null>(null);
  const [hasAccess, setHasAccess] = useState(false);

  // Sign-in form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signingIn, setSigningIn] = useState(false);

  // Messages
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loadingMessages, setLoadingMessages] = useState(false);

  useEffect(() => {
    let mounted = true;

    supabase.auth.getSession().then(({ data }) => {
      if (mounted) {
        setSession(data.session);
        setBooting(false);
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, newSession) => {
      if (mounted) setSession(newSession);
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  // Check admin role whenever the session changes
  useEffect(() => {
    let mounted = true;

    if (!session) {
      setHasAccess(false);
      setMessages([]);
      return;
    }

    supabase
      .rpc("has_role", {
        _user_id: session.user.id,
        _role: "admin" as never,
      })
      .then(({ data }) => {
        if (mounted) setHasAccess(data === true);
      });

    return () => {
      mounted = false;
    };
  }, [session]);

  const loadMessages = useCallback(async () => {
    setLoadingMessages(true);
    const { data, error } = await supabase
      .from("contact_messages")
      .select("*")
      .order("created_at", { ascending: false });

    setLoadingMessages(false);

    if (error) {
      toast.error("Could not load messages. Please try again.");
      return;
    }
    setMessages((data ?? []) as ContactMessage[]);
  }, []);

  useEffect(() => {
    if (hasAccess) loadMessages();
  }, [hasAccess, loadMessages]);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password) return;

    setSigningIn(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });
    setSigningIn(false);

    if (error) {
      toast.error("Invalid email or password.");
      return;
    }
    setPassword("");
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setEmail("");
  };

  const toggleRead = async (msg: ContactMessage) => {
    const next = !msg.is_read;
    setMessages((prev) =>
      prev.map((m) => (m.id === msg.id ? { ...m, is_read: next } : m))
    );

    const { error } = await supabase
      .from("contact_messages")
      .update({ is_read: next })
      .eq("id", msg.id);

    if (error) {
      setMessages((prev) =>
        prev.map((m) => (m.id === msg.id ? { ...m, is_read: msg.is_read } : m))
      );
      toast.error("Could not update the message. Please try again.");
    }
  };

  const unreadCount = messages.filter((m) => !m.is_read).length;

  if (booting) {
    return (
      <PageTransition>
        <section className="min-h-screen w-full gradient-hero flex items-center justify-center">
          <Loader2 className="h-6 w-6 text-primary animate-spin" />
        </section>
      </PageTransition>
    );
  }

  // Signed out → sign-in form
  if (!session) {
    return (
      <PageTransition>
        <section className="min-h-screen w-full gradient-hero flex items-center justify-center pt-24 pb-16">
          <motion.form
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            onSubmit={handleSignIn}
            className="glass rounded-2xl shadow-card p-8 w-full max-w-sm mx-4"
          >
            <motion.div variants={fadeInUp} className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <Lock size={22} className="text-primary" />
              </div>
              <h1 className="text-xl font-bold text-gradient">Admin Sign In</h1>
              <p className="mt-1 text-sm text-muted-foreground">
                Sign in to view your inbox.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-4">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
              <Button
                type="submit"
                className="w-full gradient-accent text-accent-foreground"
                disabled={signingIn}
              >
                {signingIn ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing in…
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>
            </motion.div>
          </motion.form>
        </section>
      </PageTransition>
    );
  }

  // Signed in but not an admin
  if (!hasAccess) {
    return (
      <PageTransition>
        <section className="min-h-screen w-full gradient-hero flex items-center justify-center pt-24 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-2xl shadow-card p-8 text-center max-w-sm mx-4"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-destructive/10 mb-4">
              <Lock size={22} className="text-destructive" />
            </div>
            <h1 className="text-xl font-bold text-gradient">No Access</h1>
            <p className="mt-2 text-sm text-muted-foreground mb-6">
              This account doesn&apos;t have admin access.
            </p>
            <Button variant="outline" onClick={handleSignOut} className="w-full">
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          </motion.div>
        </section>
      </PageTransition>
    );
  }

  // Admin inbox
  return (
    <PageTransition>
      <section className="min-h-screen w-full gradient-hero flex items-start justify-center pt-24 pb-16">
        <div className="w-full max-w-4xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8"
          >
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient">
                Inbox
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">
                {unreadCount > 0
                  ? `${unreadCount} unread message${unreadCount === 1 ? "" : "s"}`
                  : "All caught up"}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={loadMessages}
                disabled={loadingMessages}
              >
                <RefreshCw
                  className={`mr-2 h-4 w-4 ${loadingMessages ? "animate-spin" : ""}`}
                />
                Refresh
              </Button>
              <Button variant="outline" size="sm" onClick={handleSignOut}>
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            </div>
          </motion.div>

          {loadingMessages && messages.length === 0 ? (
            <div className="flex justify-center py-20">
              <Loader2 className="h-6 w-6 text-primary animate-spin" />
            </div>
          ) : messages.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass rounded-2xl shadow-card p-12 text-center"
            >
              <Inbox size={36} className="mx-auto text-muted-foreground mb-3" />
              <p className="text-sm text-muted-foreground">
                No messages yet. New contact form submissions will appear here.
              </p>
            </motion.div>
          ) : (
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="space-y-4"
            >
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  variants={fadeInUp}
                  className={`glass rounded-2xl shadow-card p-5 transition-colors ${
                    msg.is_read ? "" : "border border-primary/40"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        {msg.is_read ? (
                          <MailOpen
                            size={16}
                            className="text-muted-foreground shrink-0"
                          />
                        ) : (
                          <Mail size={16} className="text-primary shrink-0" />
                        )}
                        <h3
                          className={`text-base truncate ${
                            msg.is_read
                              ? "text-foreground"
                              : "font-semibold text-primary"
                          }`}
                        >
                          {msg.name}
                        </h3>
                      </div>
                      <a
                        href={`mailto:${msg.email}`}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors truncate block"
                      >
                        {msg.email}
                      </a>
                      <p className="mt-1 text-xs text-muted-foreground/70">
                        {formatDate(msg.created_at)}
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleRead(msg)}
                      className="shrink-0"
                    >
                      {msg.is_read ? "Mark Unread" : "Mark Read"}
                    </Button>
                  </div>
                  <p className="mt-4 text-sm text-foreground/90 leading-relaxed whitespace-pre-wrap break-words">
                    {msg.message}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </PageTransition>
  );
}
