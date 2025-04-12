import Nav from '../Nav/Nav.jsx'

export default function Header() {
    return(
        <header className="bg-primary text-white py-20">
            <div className="container mx-auto flex justify-between items-center">
                <Nav></Nav>
            </div>
        </header>
    );
}