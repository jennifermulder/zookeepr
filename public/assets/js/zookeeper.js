const $displayArea = document.querySelector('#display-area');
//establish reference to form data
const $zookeeperForm = document.querySelector("#zookeeper-form");

const printResults = resultArr => {
  console.log(resultArr);

  const animalHTML = resultArr.map(({ id, name, age, favoriteAnimal }) => {
    return `
  <div class="col-12 col-md-5 mb-3">
    <div class="card p-3" data-id=${id}>
      <h4 class="text-primary">${name}</h4>
      <p>Age: ${age}<br/>
      Favorite Animal: ${favoriteAnimal.substring(0, 1).toUpperCase() +
        favoriteAnimal.substring(1)}<br/>
      </p>
    </div>
  </div>
    `;
  });

  $displayArea.innerHTML = animalHTML.join('');
};

//set up zookeeper so that it can handle queries ("view zookeepers")
const getZookeepers = (formData = {}) => {
  let queryUrl = '/api/zookeepers?';

  //to display objects
  Object.entries(formData).forEach(([key, value]) => {
    queryUrl += `${key}=${value}&`;
  });

  fetch(queryUrl)
    .then(response => {
      if (!response.ok) {
        return alert(`Error: ${response.statusText}`);
      }
      return response.json();
    })
    .then(zookeeperArr => {
      console.log(zookeeperArr);
      printResults(zookeeperArr);
    });
};

//handle the form data from zookeepers.html and pass data into getZookeepers()
const handleGetZookeepersSubmit = event => {
  event.preventDefault();
  const nameHTML = $zookeeperForm.querySelector('[name="name"]');
  const name = nameHTML.value;

  const ageHTML = $zookeeperForm.querySelector('[name="age"]');
  const age = ageHTML.value;

  const zookeeperObject = { name, age };

  getZookeepers(zookeeperObject);
};

$zookeeperForm.addEventListener('submit', handleGetZookeepersSubmit);

getZookeepers();