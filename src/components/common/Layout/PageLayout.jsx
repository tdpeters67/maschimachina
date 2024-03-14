import Footer from "../Footer/Footer"
import Header from "../Header/Header"

export const PageLayout = ({ children }) => {
    return <>
        <Header />
            <div className="container">
                {children}
            </div>
        <Footer />
    </>
}