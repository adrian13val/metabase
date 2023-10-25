/* eslint "react/prop-types": "warn" */
import PropTypes from "prop-types";

import cx from "classnames";
import { Icon } from "metabase/core/components/Icon";
const S = {};

const LabelIcon = ({ icon, size = 16, className, style }) =>
  icon.charAt(0) === "#" ? (
    <span
      className={cx(S.icon, S.colorIcon, className)}
      style={{ backgroundColor: icon, width: size, height: size }}
    />
  ) : (
    <Icon className={cx(S.icon, className)} name={icon} />
  );

LabelIcon.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  icon: PropTypes.string,
  size: PropTypes.number,
};

export default LabelIcon;
