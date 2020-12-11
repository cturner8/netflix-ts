import {
  useState,
  useContext,
  createContext,
  VideoHTMLAttributes,
  ButtonHTMLAttributes,
  Dispatch,
} from "react";
import ReactDOM from "react-dom";
import { Container, Button, Overlay, Inner, Close } from "./styles/player";

interface Props {}
interface VideoProps extends VideoHTMLAttributes<HTMLVideoElement> {}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

interface Context {
  showPlayer: boolean;
  setShowPlayer: Dispatch<React.SetStateAction<boolean>>;
}

interface Compound {
  Video: React.FC<VideoProps>;
  Button: React.FC<ButtonProps>;
}

export const PlayerContext = createContext<Context>({
  showPlayer: false,
  setShowPlayer: () => {},
});

const Player: React.FC<Props> & Compound = ({ children, ...restProps }) => {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
};

const PVideo: React.FC<VideoProps> = ({ src, ...restProps }) => {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return showPlayer ? (
    ReactDOM.createPortal(
      <Overlay onClick={() => setShowPlayer(false)}>
        <Inner>
          <video id="netflix-player" controls>
            <source src={src} type="video/mp4" />
          </video>
        </Inner>
      </Overlay>,
      document.body
    )
  ) : (
    <></>
  );
};

const PButton: React.FC<ButtonProps> = ({ ...restProps }) => {
  const { setShowPlayer } = useContext(PlayerContext);

  return (
    <Button
      onClick={() => setShowPlayer((prevShow) => !prevShow)}
      {...restProps}
    >
      Play
    </Button>
  );
};

Player.Video = PVideo;
Player.Button = PButton;

export { Player };
