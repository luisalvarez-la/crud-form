import { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./styles/FormUser.css";

const FormUser = ({
  createUser,
  setUserSelected,
  updateUser,
  userSelected,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  useEffect(() => {
    reset(userSelected);
  }, [userSelected]);

  const submit = (data) => {
    if (userSelected) {
      updateUser(userSelected.id, data);
      setUserSelected();
    } else {
      createUser(data);
    }

    reset({
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      birthday: "",
      image_url: "",
    });
  };

  return (
    <div className="form__container flex-container">
      <form onSubmit={handleSubmit(submit)} className="form flex-container">
        <span className="form__exit flex-container">
          <i className="bx bx-x"></i>
        </span>
        <h2 className="form__title">
          {userSelected ? "Update User" : "New User"}
        </h2>
        <div className="form__list">
          <label className="form__field grid__container">
            <span className="form__label">Email</span>
            <input className={`form__input ${errors.email ? "form__input--error" : ""}`}
              type="email"
              {...register("email", {
                maxLength: {
                  value: 50,
                  message: "Max length is 50 characters",
                },
                required: "Email is required",
              })}
            />
            <p className="form__error">{errors.email?.message}</p>
          </label>
          <label className="form__field grid__container">
            <span  className="form__label">Password</span>
            <input className={`form__input ${errors.password ? "form__input--error" : ""}`}
              type="password"
              {...register("password", {
                maxLength: {
                  value: 20,
                  message: "Max length is 20 characters",
                },
                required: "Password is required",
              })}
            />
            <p className="form__error">{errors.password?.message}</p>
          </label>
          <label className="form__field grid__container">
            <span className="form__label">First Name</span>
            <input className={`form__input ${errors.first_name ? "form__input--error" : ""}`}
              type="text"
              {...register("first_name", {
                maxLength: {
                  value: 15,
                  message: "Max length is 15 characters",
                },
                required: "First Name is required",
              })}
            />
            <p className="form__error">{errors.first_name?.message}</p>
          </label>
          <label className="form__field grid__container">
            <span className="form__label">Last Name</span>
            <input className={`form__input ${errors.last_name ? "form__input--error" : ""}`}
              type="text"
              {...register("last_name", {
                maxLength: {
                  value: 15,
                  message: "Max length is 15 characters",
                },
                required: "Last Name is required",
              })}
            />
            <p className="form__error">{errors.last_name?.message}</p>
          </label>
          <label className="form__field grid__container">
            <span className="form__label">Birthday</span>
            <input className={`form__input ${errors.birthday ? "form__input--error" : ""}`}
              type="date"
              {...register("birthday", {
                maxLength: {
                  value: 10,
                  message: "Max length is 10 characters",
                },
                required: " Birthday is required",
              })}
            />
            <p className="form__error">{errors.birthday?.message}</p>
          </label>
          <label className="form__field grid__container">
            <span className="form__label">Image Url</span>
            <input className={`form__input ${errors.image_url ? "form__input--error" : ""}`}
              type="text"
              {...register("image_url", { required: "Image Url is required" })}
            />
            <p className="form__error">{errors.image_url?.message}</p>
          </label>
        </div>
        <button className="form__button">{userSelected ? "Update User" : "Create User"}</button>
      </form>
    </div>
  );
};

export default FormUser;
