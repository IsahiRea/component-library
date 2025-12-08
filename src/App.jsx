import { Badge, Banner, Button, Card, Menu, Star } from './components'
import { HiOutlineCloudUpload } from "react-icons/hi"
import { FaRocket } from "react-icons/fa"

function App() {
    return (
        <div className="showcase">
            <header className="showcase-header">
                <h1>Component Library</h1>
                <p>A collection of reusable React components</p>
            </header>

            <section className="component-section">
                <h2>Button</h2>
                <p>Customizable button component with multiple variants and sizes.</p>
                <div className="component-preview">
                    <div className="variant-group">
                        <span className="variant-label">Default</span>
                        <Button>Default</Button>
                    </div>
                    <div className="variant-group">
                        <span className="variant-label">Success</span>
                        <Button variant="success">Success</Button>
                    </div>
                    <div className="variant-group">
                        <span className="variant-label">Warning</span>
                        <Button variant="warning">Warning</Button>
                    </div>
                    <div className="variant-group">
                        <span className="variant-label">Danger</span>
                        <Button variant="danger">Danger</Button>
                    </div>
                    <div className="variant-group">
                        <span className="variant-label">Small</span>
                        <Button size="sm">Small</Button>
                    </div>
                    <div className="variant-group">
                        <span className="variant-label">Large</span>
                        <Button size="lg">Large</Button>
                    </div>
                </div>
            </section>

            <section className="component-section">
                <h2>Badge</h2>
                <p>Small status indicators with color variants and pill style.</p>
                <div className="component-preview">
                    <div className="variant-group">
                        <span className="variant-label">Default</span>
                        <Badge>Default</Badge>
                    </div>
                    <div className="variant-group">
                        <span className="variant-label">Red</span>
                        <Badge color="red">Error</Badge>
                    </div>
                    <div className="variant-group">
                        <span className="variant-label">Green</span>
                        <Badge color="green">Success</Badge>
                    </div>
                    <div className="variant-group">
                        <span className="variant-label">Blue</span>
                        <Badge color="blue">Info</Badge>
                    </div>
                    <div className="variant-group">
                        <span className="variant-label">Yellow</span>
                        <Badge color="yellow">Warning</Badge>
                    </div>
                    <div className="variant-group">
                        <span className="variant-label">Purple Pill</span>
                        <Badge color="purple" type="pill">New</Badge>
                    </div>
                    <div className="variant-group">
                        <span className="variant-label">Pink Pill</span>
                        <Badge color="pink" type="pill">Featured</Badge>
                    </div>
                </div>
            </section>

            <section className="component-section">
                <h2>Banner</h2>
                <p>Alert banners for notifications with single and multi-line variants.</p>
                <div className="component-preview column">
                    <Banner status="success" variant="single" />
                    <Banner status="warning" variant="single" />
                    <Banner status="error" variant="multi">
                        Please check your form inputs and try again. Contact support if the issue persists.
                    </Banner>
                    <Banner status="neutral" variant="multi">
                        A new version is available. Refresh to update your application.
                    </Banner>
                </div>
            </section>

            <section className="component-section">
                <h2>Card</h2>
                <p>Feature cards with customizable icons and titles.</p>
                <div className="component-preview">
                    <Card icon={HiOutlineCloudUpload} title="Easy Deployment">
                        Deploy your applications to the cloud with a single click.
                    </Card>
                    <Card icon={FaRocket} title="Fast Performance">
                        Optimized for speed and efficiency out of the box.
                    </Card>
                </div>
            </section>

            <section className="component-section">
                <h2>Menu</h2>
                <p>Accessible dropdown menu with keyboard navigation support.</p>
                <div className="component-preview">
                    <Menu>
                        <Menu.Button>Options</Menu.Button>
                        <Menu.Dropdown>
                            <Menu.Item onClick={() => console.log('Edit')}>Edit</Menu.Item>
                            <Menu.Item onClick={() => console.log('Duplicate')}>Duplicate</Menu.Item>
                            <Menu.Item onClick={() => console.log('Delete')}>Delete</Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                    <Menu>
                        <Menu.Button>Account</Menu.Button>
                        <Menu.Dropdown>
                            <Menu.Item>Profile</Menu.Item>
                            <Menu.Item>Settings</Menu.Item>
                            <Menu.Item>Sign Out</Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </div>
            </section>

            <section className="component-section">
                <h2>Star</h2>
                <p>Toggle star/favorite button with accessibility support.</p>
                <div className="component-preview dark-bg">
                    <div className="variant-group">
                        <span className="variant-label">Unstarred</span>
                        <Star />
                    </div>
                    <div className="variant-group">
                        <span className="variant-label">Starred</span>
                        <Star defaultStarred={true} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default App
