import Menu from './components/Menu';
import Star from './components/Star';
import Badge from './components/Badge/Badge';
import Banner from './components/Banner/Banner';
import Card from './components/Card/Card';

function App() {

  return (
    <>
      <Badge>Nice</Badge>
      <Banner type="multi" notify="error">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner>
      <Card>Uploading data to the cloud...</Card>
    </>
  )
}

export default App
