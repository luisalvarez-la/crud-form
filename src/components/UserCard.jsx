
import './styles/UserCard.css';

const UserCard = ({ user, deleteUser, setUserSelected}) => {

    const handleDelete = () => {
        deleteUser(user.id);
    };

    const handleUpdate = () => {
        setUserSelected(user);
    };

  return (
    <article className="user">
      <img className="user__image"
        src={user.image_url}
        alt={`image of ${user.first_name} ${user.last_name}`}
      />
      <h3 className="user__name">{`${user.first_name} ${user.last_name}`}</h3>
      <hr className="user__separator"/>
      <ul className="user__list grid__container">
        <li className="user__item grid__container">
          <span className="user__label">Email: </span>
          <span className="user__value">{user.email}</span>
        </li>
        <li className="user__item grid__container">
          <span className="user__label">Birthday: </span>
          <span className="user__value">{user.birthday}</span>
        </li>
      </ul>
      <footer className="user__footer flex-container">
        <button
          onClick={handleDelete} className="user__delete user__button">
          Delete
        </button>
        <button
          onClick={handleUpdate} className="user__update user__button"
        >
          Update
        </button>
      </footer>
      
    </article>
  );
};

export default UserCard;
