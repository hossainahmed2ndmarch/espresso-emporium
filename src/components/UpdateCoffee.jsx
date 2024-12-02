import { FaArrowLeftLong } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const {
    _id,
    name,
    chef,
    price,
    photo,
    taste,
    supplier,
    details,
    quantity,
    category,
  } = coffee;
  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const updatedCoffee = {
      name,
      chef,
      taste,
      supplier,
      category,
      details,
      photo,
      quantity,
      price,
    };
    console.log(updatedCoffee);

    // Send data to the server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee item updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="bg-add-coffee bg-cover bg-center my-28">
      <div className="ml-[300px] my-8">
        <button className="btn bg-transparent hover:bg-btn-color border-none text-text-header text-3xl font-rancho">
          <span className="text-text-btn">
            <FaArrowLeftLong />
          </span>{" "}
          Back to home
        </button>
      </div>
      <div className="card bg-form w-2/3 mx-72 shrink-0 rounded-none px-28 py-[70px]">
        <h2 className="text-text-header font-rancho text-[45px] text-center">
          Update Your Coffee: {name}
        </h2>
        <p className="text-text-p text-center text-lg">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        {/* Form */}
        <form
          onSubmit={handleUpdateCoffee}
          className="card-body grid md:grid-cols-2 gap-6 mt-8"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text font-raleway font-semibold text-xl text-text-h5">
                Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter coffee name"
              defaultValue={name}
              className="input rounded-md"
              name="name"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-raleway font-semibold text-xl text-text-h5">
                Chef
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter chef name"
              defaultValue={chef}
              className="input rounded-md"
              name="chef"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-raleway font-semibold text-xl text-text-h5">
                Supplier
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter coffee supplier"
              defaultValue={supplier}
              className="input rounded-md"
              name="supplier"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-raleway font-semibold text-xl text-text-h5">
                Taste
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter coffee taste"
              defaultValue={taste}
              className="input rounded-md"
              name="taste"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-raleway font-semibold text-xl text-text-h5">
                Category
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter coffee category"
              defaultValue={category}
              className="input rounded-md"
              name="category"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-raleway font-semibold text-xl text-text-h5">
                Details
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter coffee details"
              defaultValue={details}
              className="input rounded-md"
              name="details"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-raleway font-semibold text-xl text-text-h5">
                Price
              </span>
            </label>
            <input
              type="number"
              placeholder="Enter coffee price"
              defaultValue={price}
              className="input rounded-md"
              name="price"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-raleway font-semibold text-xl text-text-h5">
                Quantity
              </span>
            </label>
            <input
              type="number"
              placeholder="Enter coffee amount"
              defaultValue={quantity}
              className="input rounded-md"
              name="quantity"
              required
            />
          </div>
          <div className="form-control col-span-2">
            <label className="label">
              <span className="label-text font-raleway font-semibold text-xl text-text-h5">
                Photo
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter photo URL"
              defaultValue={photo}
              className="input rounded-md"
              name="photo"
              required
            />
          </div>
          <div className="form-control mt-6 col-span-2">
            <button className="btn font-rancho text-2xl bg-btn-color rounded-md border-2 border-text-btn">
              Update Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
