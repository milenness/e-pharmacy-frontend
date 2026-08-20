// import Header from "@/components/Header/Header";
// import Footer from "@/components/Footer/Footer";

export default function SharedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
          {/* <Header /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
}
