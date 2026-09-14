import "../assets/css/Layout.css";

function Layout({children}) {

    return (
        <section className="layout-wrapper">
            {children}
        </section>
    )
}

export default Layout;