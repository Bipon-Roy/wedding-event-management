import swal from "sweetalert";

const getStorageData = () => {
    const storedItem = localStorage.getItem("Services");
    if (storedItem) {
        return JSON.parse(storedItem);
    }
    return [];
};

const setStorageData = (id) => {
    const storedData = getStorageData();
    const exist = storedData.find((serviceId) => serviceId === id);
    if (exist) {
        swal("Limit Exceeded!!!", "You have already taken this service", "error");
    } else {
        storedData.push(id);
        localStorage.setItem("Services", JSON.stringify(storedData));
        swal("Thanks!", "Service Successfully Added to the Wishlist", "success");
    }
};

export { getStorageData, setStorageData };
