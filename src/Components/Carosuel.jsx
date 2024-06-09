import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
      <img  className="d-block w-100" src="https://hips.hearstapps.com/esq.h-cdn.co/assets/16/43/3200x1600/landscape-1477677567-lede-static-3.jpg?resize=1200:*" alt="First slide"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img class="d-block w-100" src="https://www.thenews.com.pk/assets/uploads/updates/2020-05-20/l_661416_110702_updates.jpg" alt="Second slide"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img class="d-block w-100" src="https://c4.wallpaperflare.com/wallpaper/38/1014/441/watch-luxury-watches-wallpaper-preview.jpg" alt="Third slide"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;