import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.wrapper_btn}>
      {options.map(button => {
        return (
          <button
            className={css.btn}
            key={button}
            onClick={onLeaveFeedback}
            name={button}
            type="button"
          >
            {button}
          </button>
        );
      })}
    </div>
  );
};
