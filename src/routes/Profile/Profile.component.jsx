import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSiteReducer } from "../../store/site/site.selector";
import {
  fetchSiteAsync,
  updateSiteAsync,
  resetSiteReducer,
} from "../../store/site/site.action";
import FormInput from "../../components/FormInput/FormInput.component";
import Button from "../../components/Button/Button.component";
import Message from "../../components/Message/Message.component";
import Spinner from "../../components/Spinner/Spinner.component";
import "./Profile.styles.scss";

const defaultFormFields = {
  business: "",
  address: "",
  city: "",
  postalCode: "",
  phone: "",
  email: "",
};

const Profile = () => {
  const didFetchRef = useRef(false);

  const { site, fetchStatus, updateStatus, error } =
    useSelector(selectSiteReducer);

  const dispatch = useDispatch();

  const [formFilds, setFormFields] = useState(defaultFormFields);
  const { business, address, city, postalCode, phone, email } = formFilds;

  useEffect(() => {
    if (!didFetchRef.current) {
      // didFetchRef.current = true;
      dispatch(fetchSiteAsync());
    }
    return function cleanup() {
      dispatch(resetSiteReducer());
      didFetchRef.current = true;
    };
  }, []);

  useEffect(() => {
    if (site) {
      const siteFields = {
        business: site.business,
        address: site.siteAddress.address,
        city: site.siteAddress.city,
        postalCode: site.siteAddress.postalCode,
        phone: site.phone,
        email: site.email,
      };
      setFormFields(siteFields);
    }
  }, [site]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const siteFields = {
      business,
      siteAddress: { address, city, postalCode },
      phone,
      email,
    };
    dispatch(updateSiteAsync(siteFields));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFilds, [name]: value });
  };

  return (
    <div className="profile-container">
      {fetchStatus === "loading" ? (
        <Spinner />
      ) : (
        <>
          <h2>User Profile</h2>
          <form onSubmit={handleSubmit}>
            <FormInput
              label="Business name"
              type="text"
              required
              onChange={handleChange}
              name="business"
              value={business}
            />

            <FormInput
              label="Address"
              type="text"
              onChange={handleChange}
              name="address"
              value={address}
            />

            <FormInput
              label="City"
              type="text"
              onChange={handleChange}
              name="city"
              value={city}
            />

            <FormInput
              label="Postal Code"
              type="text"
              onChange={handleChange}
              name="postalCode"
              value={postalCode}
            />

            <FormInput
              label="Phone"
              type="phone"
              onChange={handleChange}
              name="phone"
              value={phone}
            />

            <FormInput
              label="Email"
              type="email"
              onChange={handleChange}
              name="email"
              value={email}
            />

            <FormInput
              label="Email"
              type="email"
              onChange={handleChange}
              name="email"
              value={email}
            />

            <FormInput
              label="Email"
              type="email"
              onChange={handleChange}
              name="email"
              value={email}
            />

            <Button type="submit">Save</Button>
          </form>
        </>
      )}
    </div>
  );
};

export default Profile;
