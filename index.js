console.log("lets learn js in detail")
const data = [
    {
        name: "khan",
        age: "19",
        city: "hyderabad",
        language: "python",
        image: "https://randomuser.me/api/portraits/med/men/50.jpg"
    },
    {
        name: "abdu",
        age: "21",
        city: "mumbai",
        language: "java",
        image: "https://randomuser.me/api/portraits/med/men/51.jpg"
    },
    {
        name: "hasbulla",
        age: "20",
        city: "kolkata",
        language: "C++",
        image: "https://randomuser.me/api/portraits/med/men/55.jpg"

    },
    {
        name: "pathan",
        age: "22",
        city: "hyderabad",
        language: "python",
        image: "https://randomuser.me/api/portraits/med/men/53.jpg"
    },
    {
        name: "khabib",
        age: "21",
        city: "delhi",
        language: "javascript",
        image: "https://randomuser.me/api/portraits/med/men/54.jpg"

    },
]

//  CV iterator
function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ?
                { value: profiles[nextIndex++], done: false } :
                { done: true }
        }
    };
}

const candidates = cvIterator(data);

nextCV();
// Button listener
const next = document.getElementById('next');
next.addEventListener('click', nextCV);

function nextCV() {
    const currentcandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if (currentcandidate != undefined) {
        image.innerHTML = `<img src='${currentcandidate.image}'>`;

        profile.innerHTML = `<ul class="list-group">
        <li class="list-group-item">Name: ${currentcandidate.name}</li>
        <li class="list-group-item">${currentcandidate.age} years old</li>
        <li class="list-group-item">Lives in ${currentcandidate.city}</li>
        <li class="list-group-item">Works in ${currentcandidate.language}</li>
      </ul>`
    }
    else {
        alert('End of candidate applications');
        window.location.reload();
    }

}