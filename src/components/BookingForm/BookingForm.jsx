import { ErrorMessage, Field, Form, Formik } from "formik";
import { bookingSchema } from "../../services/yupSchema";
import css from "./BookingForm.module.css";

const INITIAL_FORM_DATA = {
  name: "",
  email: "",
  bookingDate: "",
  comment: "",
};

const BookingForm = () => {
  const handleSubmit = (data, actions) => {
    actions.resetForm();
  };

  return (
    <div className={css.wrapper}>
      <div className={css.titleWrapper}>
        <h3 className={css.title}>Book your campervan now</h3>
        <p>Stay connected! We are always ready to help you.</p>
      </div>
      <Formik
        validationSchema={bookingSchema}
        initialValues={INITIAL_FORM_DATA}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label>
            <Field
              className={css.input}
              type="text"
              name="name"
              placeholder="Name"
              autoComplete="off"
            />
            <ErrorMessage className="errorMsg" name="name" component="span" />
          </label>

          <label>
            <Field
              className={css.input}
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
            />
            <ErrorMessage className="errorMsg" name="email" component="span" />
          </label>

          <label>
            <Field
              className={css.input}
              type="date"
              name="bookingDate"
              placeholder="Booking date"
              autoComplete="off"
            />
            <ErrorMessage
              className="errorMsg"
              name="bookingDate"
              component="span"
            />
          </label>

          <label>
            <Field
              as="textarea"
              rows="5"
              className={css.textarea}
              name="comment"
              placeholder="Comment"
              autoComplete="off"
            />
            <ErrorMessage
              className="errorMsg"
              name="bookingDate"
              component="span"
            />
          </label>

          <button className={css.btn} type="submit">
            <span>Send</span>
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default BookingForm;
