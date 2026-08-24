import AuthHeader from "@/components/AuthHeader";
import css from "./page.module.css";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AuthHeader />
      <main className={css.mainContainer}>
        <section className={css.section}>
          <div className={css.container}>
            <div className={css.content}>
              <h1 className={css.title}>
                Your medication, delivered Say goodbye to all{" "}
                <span className={css.accent}>your healthcare</span> worries with
                us
              </h1>
              {children}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
