import PropTypes from 'prop-types';

const foodLike = [
  {
    id: 1,
    name: 'spaghetti',
    image: 'https://www.tefal.co.kr/medias/?context=bWFzdGVyfHJvb3R8MjUyMTF8aW1hZ2UvanBlZ3xoZmYvaGFlLzE0MDcwMjU0NTY3NDU0LmpwZ3w0NmQ1Yjg3OTY0YzhlNDBlMjBiNzU5ZTE2N2RkNzBlZGRjMmRhYWJiMGQyOGIxMDEwZmM5MjFhNmM5OTYxNmE5',
    alt: '스파게티',
    rating: 3.0 
  },
  {
    id: 2,
    name: 'pizza',
    image: 'https://cdn.imweb.me/thumbnail/20170922/59c3e2b67bbb3.png',
    alt: '피자',
    rating: 4.0 
  },
  {
    id: 3,
    name: 'tomato',
    image: 'https://health.chosun.com/site/data/img_dir/2021/01/12/2021011202231_0.jpg',
    alt: '토마토',
    rating: 1.1 
  }
]

function renderFood(foo) {
  return <Food 
  name={foo.name} 
  picture={foo.image} 
  alt={foo.alt} 
  id={foo.id}
  rating={foo.rating}>    
  </Food>
}

foodLike.PropTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

function App() {
  return (
    <div>
      {
        foodLike.map(renderFood)
      }
    </div>
  );
}

function Food({name, picture, alt, rating}) {
  // {fav} = props
  return (
    <div>
      <h3>I love {name} </h3>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={alt}/>
    </div>
  )
}

// export default App