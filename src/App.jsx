import { Badge, Banner, Button, Card, Menu, Star } from './components'
import { HiOutlineCloudUpload } from "react-icons/hi"

function App() {
    return (
        <>
            <Star />
            <Badge color="blue" type="pill">Status</Badge>
            <Banner variant="multi" status="error">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
            </Banner>
            <Card icon={HiOutlineCloudUpload} title="Easy Deployment">
                Uploading data to the cloud...
            </Card>
            <Menu>
                <Menu.Button>Options</Menu.Button>
                <Menu.Dropdown>
                    <Menu.Item onClick={() => console.log('Edit clicked')}>Edit</Menu.Item>
                    <Menu.Item onClick={() => console.log('Delete clicked')}>Delete</Menu.Item>
                    <Menu.Item onClick={() => console.log('Share clicked')}>Share</Menu.Item>
                </Menu.Dropdown>
            </Menu>
            <Button variant="success">Success</Button>
        </>
    )
}

export default App
