import './services.css'
import { Card } from '../../containers'
import frontendImage from '../../assets/frontend.png'
import backendImage from '../../assets/backend.png'

const Services = () => {
  const services = [
    {
      title: "front-end",
      brief: "Build any front-end App using new open source technology or third party services",
      tags: ['Javascript','React', 'HTML', 'CSS', 'SASS'],
      image: "../../assets/front-end.png"
    },
    {
      title: "back-end",
      brief: "Build any back-end and itegration between APIs",
      tags: ['Node.js', 'Mongodb', 'Express.js', 'Models', "REST API"],
      image: "../../assets/back-end.png"
    }
  ]

  return (
    
    <div className="services">
      {/* front-end service */}
      <div className="services__card">
        <Card service={services[0]} image={frontendImage} />
      </div>
      <div className="services__card">
        <Card service={services[1]} image={backendImage} />
      </div>
    </div>
  )
}
export default Services