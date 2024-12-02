import { MdOutlineRemoveRedEye } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { MdDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const OurProducts = ({ product, coffees, setCoffees }) => {
  const { _id, name, chef, price, photo } = product;
  // Delete functionality
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
              const remainingCoffee = coffees.filter(
                (coffee) => coffee._id !== _id
              );
              setCoffees(remainingCoffee);
            }
          });
      }
    });
  };
  return (
    <div className="p-6 flex flex-row items-center space-x-8 rounded-lg bg-[#F5F4F1]">
      <figure>
        <img src={photo} alt={name} />
      </figure>
      <div className=" flex flex-row items-center w-full justify-between">
        <div>
          <h2 className="card-title text-[#5C5B5B]">
            <strong className="text-[#1B1A1A]">Name:</strong>
            {name}
          </h2>
          <h2 className="card-title text-[#5C5B5B]">
            <strong className="text-[#1B1A1A]">Chef:</strong>
            {chef}
          </h2>
          <h2 className="card-title text-[#5C5B5B]">
            <strong className="text-[#1B1A1A]">Chef:</strong>
            {price}
          </h2>
        </div>
        <div className="card-actions">
          <div className="flex flex-col join-vertical space-y-4">
            <button className="btn join-item bg-[#D2B48C] text-white text-2xl">
              <MdOutlineRemoveRedEye />
            </button>
            <Link
              to={`updateCoffee/${_id}`}
              className="btn join-item bg-[#3C393B] text-white text-2xl"
            >
              <GoPencil />
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn join-item bg-[#EA4744] text-white text-2xl"
            >
              <MdDeleteOutline />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
