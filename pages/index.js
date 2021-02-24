
import Card_section from '../components/Card_section'
import Form_Contato from '../components/Form_Contato'
import Hero_section from '../components/Hero_section'
import Navbar from '../components/Navbar'
import Table_prices from '../components/Table_prices'
import Team_section from '../components/Team_section'

export default function Home() {
  return (
    <div class="overflow-hidden">
      <Navbar/>
      <Hero_section />
      <Card_section />
      <Table_prices />
      <Team_section></Team_section>
      <Form_Contato/>
      </div>
  )
}
