export const metadata = {
  title: "Lic. en Negocios Internacionales Online | UAG",
  description: "Licenciatura en Negocios Internacionales 100% online. Impulsa tu carrera en el comercio global con respaldo de UAG y Arizona State University. Inicio septiembre 2026.",
  keywords: "negocios internacionales, licenciatura, UAG, online, comercio exterior, internacionalización",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
