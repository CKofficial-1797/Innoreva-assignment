import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
      <img  className="d-block w-100" src="https://hips.hearstapps.com/esq.h-cdn.co/assets/16/43/3200x1600/landscape-1477677567-lede-static-3.jpg?resize=1200:*" alt="First slide"/>
        <Carousel.Caption>
          <h3>$310</h3>
          <p>Welcome to the world of luxury </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img class="d-block w-100" src="https://www.thenews.com.pk/assets/uploads/updates/2020-05-20/l_661416_110702_updates.jpg" alt="Second slide"/>
        <Carousel.Caption>
          <h3>$230 </h3>
          <p>Premium watches at affordable prices.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img class="d-block w-100" src="https://c4.wallpaperflare.com/wallpaper/38/1014/441/watch-luxury-watches-wallpaper-preview.jpg" alt="Third slide"/>
        <Carousel.Caption>
          <h3>Best Watch design</h3>
          <p>
          sophisticate your personality with these fascinating models
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;