import style from "./styles.module.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <img
        className="inline-block h-32 w-32 rounded-md"
        src="https://plus.unsplash.com/premium_photo-1706800175741-f0fcf3bb3d89?q=80&w=3681&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Dan_Abromov"
      />
      <main className={style.main}>{children}</main>
    </>
  );
}
