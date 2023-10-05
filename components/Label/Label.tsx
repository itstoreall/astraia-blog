import s from "./Label.module.scss";

const Label = ({ text }: { text: string }) => {
  return (
    <div className={s.label}>
      <span className={s.labelTitle}>{text}</span>
      <span className={s.labelLine} />
    </div>
  );
};

export default Label;
