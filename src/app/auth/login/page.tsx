import { Button, Input } from "@/components";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function LoginPage() {
  return (
    <>
      <main className="w-full bg-white">
        <section className="min-h-screen w-full grid grid-cols-12 gap-5 relative">
          <div className="col-span-6 h-screen bg-zinc-900 p-10 flex flex-col justify-between">
            <div className="flex items-center gap-2">
              <Image src={`/logo.svg`} alt="logo" width={48} height={48} />
              <p className="text-[#4A4A4A] font-bold text-xl">Solaris</p>
            </div>
            <blockquote>
              <p className="text-neutral-500 font-medium pr-8 text-lg">
                &ldquo;This library has saved me countless hours of work and
                helped me deliver stunning designs to my clients faster than
                ever before.&rdquo;
              </p>
            </blockquote>
          </div>
          <div className="col-span-6 h-screen flex items-center justify-center">
            <div className="lg:p-8">
              <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col space-y-2 text-center">
                  <h1 className="text-2xl font-semibold tracking-tight">
                    Create an account
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    Enter your email below to create your account
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <Input type="txt" placeholder="Email" />
                  <Button className="bg-black w-full text-white">
                    Sign in with email
                  </Button>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="px-2 bg-white">Or continue with</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Button
                    variant="outline"
                    type="button"
                    className="flex items-center gap-2"
                  >
                    <Image
                      src={`/github-mark.svg`}
                      width={16}
                      height={16}
                      alt="github"
                    />
                    GitHub
                  </Button>
                  <Button
                    variant="outline"
                    type="button"
                    className="flex items-center gap-2"
                  >
                    <Image
                      src={`/google-mark.svg`}
                      width={16}
                      height={16}
                      alt="google"
                    />
                    Google
                  </Button>
                </div>

                <p className="px-8 text-center text-sm text-muted-foreground">
                  By clicking continue, you agree to our{" "}
                  <Link
                    href="/terms"
                    className="underline underline-offset-4 hover:text-primary"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="underline underline-offset-4 hover:text-primary"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
