import PropTypes from "prop-types";
import { SectionWrap, SectionTitle } from "./Section.styled";

export default function Section({ title, children }) {
  return (
    <SectionWrap>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionWrap>
  );
}

Section.ropTypes = {
  title: PropTypes.string.isRequired,
};
