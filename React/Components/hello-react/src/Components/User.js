import PropTypes from "prop-types";


//function User(props) {
function User({ name, surname, age, isLoggedIn,friends, address }) {    
        // { 
        //     <h1> { props.isLoggedIn
        //         ? `Benim adim ${props.name}, soyadim ${props.surname}` 
        //         : "Giris yapmadiniz" }
        //     </h1> 
        // }
        if(!isLoggedIn)
            return <div>Giris yapmadınız</div>;
    return( 
        <>
        <h1>
            {/* { isLoggedIn ? `${name} ${surname} (${age})` : "Giris yapmadiniz" } */}
            { `${name} ${surname} (${age})` }
        </h1>
        
        { address.title } { address.plz }
        <br />
        <br />
        {/* { friends.map((friend, index) => (
            <div key={index}>
                {index} - {friend}
            </div>
        ))} */}

        {/* { friends.map((friend) => (
            <div key={friend.id}>
                {friend.name}
            </div>
        ))} */}

        {/* {friends.map((friend) => {
            return <div key={friend.id}>{friend.name}</div>;
        })} */}

        {friends.map((friend) => (
            <div key={friend.id}>{friend.name}</div>
        ))}
        </>
    );
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string,
    isLoggedIn: PropTypes.bool,
    age: PropTypes.oneOfType([PropTypes.array, PropTypes.number]).isRequired,
    friends: PropTypes.array,
    address: PropTypes.shape({
        title: PropTypes.string,
        plz: PropTypes.number
    }),
};

User.defaultProps = {
    isLoggedIn: false
}

export default User;