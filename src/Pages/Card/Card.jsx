import {
  TwitterLogo,
  MetaLogo,
  ShareFat,
  DotsThreeOutlineVertical,
  InstagramLogo,
  ArrowsClockwise,
} from "@phosphor-icons/react";
import "./Card.scss";
export const Card = (props) => {
  return (
    <>
      <article className="profile">
        <div className="profile-image">
          <img src={props.image} />
        </div>
        <h3 className="profile-username">{props.firstName}</h3>
        <small className="profile-user-handle">@_{props.lastName}$</small>
        <small className="profile-user-handle">Delhi,India</small>
        <small className="profile-user-handle">{props.email}</small>
        <div className="profile-actions">
          <button className="btn btn--primary">Follow</button>
          <button className="btn btn--icon">
            <ShareFat size={20} />
          </button>
          <button className="btn btn--icon">
            <DotsThreeOutlineVertical size={20} />
          </button>
        </div>
        <div className="profile-links">
          <a href="#" className="link link--icon">
            <TwitterLogo size={32} />
          </a>
          <a href="#" className="link link--icon">
            <MetaLogo size={32} />
          </a>
          <a href="#" className="link link--icon">
            <InstagramLogo size={32} />
          </a>
        </div>
      </article>
      <aside>
        <button className="profile link ref" onClick={props.fun}>
          <ArrowsClockwise size={42} />
        </button>
      </aside>
    </>
  );
};
