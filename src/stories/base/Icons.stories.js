import React from "react";

/**
 * Storybook Icons story.
 * @template
 * Icons - Renders icons via stories.
 */

import { Instagram } from "../../icons/Instagram";
import { ChevronRight } from "../../icons/ChevronRight";
import { Camera1 } from "../../icons/Camera1";
import { Camera2 } from "../../icons/Camera2";
import { Wrench } from "../../icons/Wrench";
import { CircledCheck } from "../../icons/CircledCheck";
import { EnvelopeOpen } from "../../icons/EnvelopeOpen";
import { EnvelopeClosed } from "../../icons/EnvelopeClosed";
import { HeartFilled } from "../../icons/HeartFilled";
import { AvatarMale } from "../../icons/AvatarMale";
import { Medkit } from "../../icons/Medkit";
import { PencilFilledColored } from "../../icons/PencilFilledColored";
import { CommentExclamation } from "../../icons/CommentExclamation";
import { WrenchScrewCrossed } from "../../icons/WrenchScrewCrossed";
import { CommentCrossed } from "../../icons/CommentCrossed";
import { TrashcanX } from "../../icons/TrashcanX";
import { AvatarWoman } from "../../icons/AvatarWoman";
import { Home } from "../../icons/Home";
import { WrenchesCrossed } from "../../icons/WrenchesCrossed";
import { CommentCheck } from "../../icons/CommentCheck";
import { ArrowDownCircle } from "../../icons/ArrowDownCircle";
import { ArrowLeft } from "../../icons/ArrowLeft";
import { ArrowRight } from "../../icons/ArrowRight";
import { ArrowLeftWithOutline } from "../../icons/ArrowLeftWithOutline";
import { ArrowRightCircle } from "../../icons/ArrowRightCircle";
import { ArrowUpWithOutline } from "../../icons/ArrowUpWithOutline";
import { Avatar } from "../../icons/Avatar";
import { AvatarManWithBackFill } from "../../icons/AvatarManWithBackFill";
import { AvatarOutline } from "../../icons/AvatarOutline";
import { AvatarRound } from "../../icons/AvatarRound";
import { AvatarWithRoundFill } from "../../icons/AvatarWithRoundFill";
import { AvatarWomanNoBackFill } from "../../icons/AvatarWomanNoBackFill";
import { Book } from "../../icons/Book";
import { Calendar } from "../../icons/Calendar";
import { CameraWithBackFill } from "../../icons/CameraWithBackFill";
import { Check } from "../../icons/Check";
import { CheckCircledOffset } from "../../icons/CheckCircledOffset";
import { CheckWithSquareFill } from "../../icons/CheckWithSquareFill";
import { ChevronLeft } from "../../icons/ChevronLeft";
import { Close } from "../../icons/Close";
import { CloseWithFill } from "../../icons/CloseWithFill";
import { CloseWithStrokeBack } from "../../icons/CloseWithStrokeBack";
import { Comment } from "../../icons/Comment";
import { CommentMulti } from "../../icons/CommentMulti";
import { CommentWithPencil } from "../../icons/CommentWithPencil";
import { Dribbble } from "../../icons/Dribbble";
import { DribbbleWithFill } from "../../icons/DribbbleWithFill";
// import { FacebookWithRoundFill } from "../../icons/FacebookWithRoundFill";
import { FacebookWithSquareBackFill } from "../../icons/FacebookWithSquareBackFill";
import { Folder2D } from "../../icons/Folder2D";
import { HeartBroken } from "../../icons/HeartBroken";
import { HeartBrokenMultiColor } from "../../icons/HeartBrokenMultiColor";
import { Image } from "../../icons/Image";
import { InfoStroke } from "../../icons/InfoStroke";
import { InstagramWithBackFill } from "../../icons/InstagramWithBackFill";
import { MedkitMultiColor } from "../../icons/MedkitMultiColor";
import { Menu } from "../../icons/Menu";
import { Pencil } from "../../icons/Pencil";
import { PencilMultiColor } from "../../icons/PencilMultiColor";
import { PhotosInARow } from "../../icons/PhotosInARow";
import { PhotosInARowMultiColor } from "../../icons/PhotosInARowMultiColor";
import { Plus } from "../../icons/Plus";
import { Refresh } from "../../icons/Refresh";
import { Search } from "../../icons/Search";
import { TrashMultiColor } from "../../icons/TrashMultiColor";
import { TrashOpen } from "../../icons/TrashOpen";
import { TumblrWithBackFill } from "../../icons/TumblrWithBackFill";
import { Twitter } from "../../icons/Twitter";
import { WarningExclamation } from "../../icons/WarningExclamation";
import { TwitterWithRoundFill } from "../../icons/TwitterWithRoundFill";
import { TwitterWithBackFillSquare } from "../../icons/TwitterWithBackFillSquare";

const Icons = {
  title: "Icons/Icons",
  component: [
    ArrowDownCircle,
    ArrowLeft,
    ArrowRight,
    ArrowLeftWithOutline,
    ArrowRightCircle,
    ArrowUpWithOutline,
    Avatar,
    AvatarManWithBackFill,
    AvatarOutline,
    AvatarRound,
    AvatarWithRoundFill,
    AvatarWomanNoBackFill,
    Camera1,
    Camera2,
    Wrench,
    CircledCheck,
    EnvelopeOpen,
    EnvelopeClosed,
    HeartFilled,
    AvatarMale,
    Medkit,
    CommentExclamation,
    PencilFilledColored,
    WrenchScrewCrossed,
    CommentCrossed,
    TrashcanX,
    ChevronRight,
    Instagram,
    WrenchesCrossed,
    CommentCheck,
    Book,
    Calendar,
    CameraWithBackFill,
    Check,
    CheckCircledOffset,
    CheckWithSquareFill,
    ChevronLeft,
    Close,
    CloseWithFill,
    CloseWithStrokeBack,
    Comment,
    CommentMulti,
    CommentWithPencil,
    Dribbble,
    DribbbleWithFill,
    // FacebookWithRoundFill,
    FacebookWithSquareBackFill,
    Folder2D,
    HeartBroken,
    HeartBrokenMultiColor,
    Image,
    InfoStroke,
    InstagramWithBackFill,
    MedkitMultiColor,
    Menu,
    Pencil,
    PencilMultiColor,
    PhotosInARow,
    PhotosInARowMultiColor,
    Plus,
    Refresh,
    Search,
    TrashMultiColor,
    TrashOpen,
    TumblrWithBackFill,
    Twitter,
    WarningExclamation,
    TwitterWithRoundFill,
    TwitterWithBackFillSquare,
  ],
  parameters: {
    docs: {
      description: {
        component: "Icons",
      },
      source: {
        type: "dynamic",
      },
    },
  },
};

// A
const IconArrowDownCircle = (args) => <ArrowDownCircle {...args} />;
export const arrowDownCircle = IconArrowDownCircle.bind({});
arrowDownCircle.args = {
  additionalClass: "",
  height: "150px",
  width: "150px",
  viewBox: "0 0 24 24",
  stroke: "#000",
  strokeWidth: "2",
};

const IconArrowLeft = (args) => <ArrowLeft {...args} />;
export const arrowLeft = IconArrowLeft.bind({});
arrowLeft.args = {
  additionalClass: "",
  height: "150px",
  width: "150px",
  viewBox: "0 0 24 24",
  stroke: "#000",
  strokeWidth: "2",
};

const IconArrowRight = (args) => <ArrowRight {...args} />;
export const arrowRight = IconArrowRight.bind({});
arrowRight.args = {
  additionalClass: "",
  height: "150px",
  width: "150px",
  viewBox: "0 0 24 24",
  stroke: "#000",
  strokeWidth: "2",
};

const IconArrowLeftWithOutline = (args) => <ArrowLeftWithOutline {...args} />;
export const arrowLeftWithOutline = IconArrowLeftWithOutline.bind({});
arrowLeftWithOutline.args = {
  additionalClass: "",
  height: "150px",
  width: "150px",
  viewBox: "0 0 24 24",
  stroke: "#000",
  strokeWidth: "2",
};

const IconArrowRightCircle = (args) => <ArrowRightCircle {...args} />;
export const arrowRightCircle = IconArrowRightCircle.bind({});
arrowRightCircle.args = {
  additionalClass: "",
  height: "150px",
  width: "150px",
  viewBox: "0 0 24 24",
  stroke: "#000",
  strokeWidth: "2",
};

const IconArrowUpWithOutline = (args) => <ArrowUpWithOutline {...args} />;
export const arrowUpWithOutline = IconArrowUpWithOutline.bind({});
arrowUpWithOutline.args = {
  additionalClass: "",
  height: "150px",
  width: "150px",
  viewBox: "0 0 24 24",
  stroke: "#000",
  strokeWidth: "2",
};

const IconAvatarMale = (args) => <AvatarMale {...args} />;
export const avatarMale = IconAvatarMale.bind({});
avatarMale.args = {
  additionalClass: "",
  height: "150px",
  width: "150px",
  viewBox: "0 0 24 24",
  fillPath1: "#c0392b",
  fillPath2: "#ecf0f1",
  fillPath3: "#bdc3c7",
  fillPath4: "#f39c12",
  fillPath5: "#95a5a6",
  fillRect1: "#95a5a6",
};

const IconAvatar = (args) => <Avatar {...args} />;
export const avatar = IconAvatar.bind({});
avatar.args = {
  additionalClass: "",
  height: "150px",
  width: "150px",
  viewBox: "0 0 16 16",
  fill: "#000",
};

const IconAvatarManWithBackFill = (args) => <AvatarManWithBackFill {...args} />;
export const avatarManWithBackFill = IconAvatarManWithBackFill.bind({});
avatarManWithBackFill.args = {
  additionalClass: "",
  height: "150px",
  width: "150px",
  viewBox: "0 0 53 53",
  fill1: "#e7eced",
  fill2: "#556080",
};

const IconAvatarOutline = (args) => <AvatarOutline {...args} />;
export const avatarOutline = IconAvatarOutline.bind({});
avatarOutline.args = {
  additionalClass: "",
  height: "150px",
  width: "150px",
  viewBox: "0 0 50 50",
  fill: "#000",
};

const IconAvatarRound = (args) => <AvatarRound {...args} />;
export const avatarRound = IconAvatarRound.bind({});
avatarRound.args = {
  additionalClass: "",
  width: 50.529,
  height: 50.529,
  viewBox: "0 0 438 438",
  fill1: "#e7eced",
  fill2: "#556080",
};

const IconAvatarWithRoundFill = (args) => <AvatarWithRoundFill {...args} />;
export const avatarWithRoundFill = IconAvatarWithRoundFill.bind({});
avatarWithRoundFill.args = {
  additionalClass: "",
  viewBox: "0 0 32 32",
  height: "150px",
  width: "150px",
  fill: "#000",
};

const IconAvatarWoman = (args) => <AvatarWoman {...args} />;
export const avatarWoman = IconAvatarWoman.bind({});
avatarWoman.args = {
  additionalClass: "",
  fill1: "#E7ECED",
  fill2: "#556080",
  width: "100px",
};

const IconAvatarWomanNoBackFill = (args) => <AvatarWomanNoBackFill {...args} />;
export const avatarWomanNoBackFill = IconAvatarWomanNoBackFill.bind({});
avatarWomanNoBackFill.args = {
  additionalClass: "",
  viewBox: "0 0 25 25",
  height: "150px",
  width: "150px",
  fill1: "#2c3e50",
  fill2: "#d35400",
  fill3: "#95a5a6",
  fill4: "#bdc3c7",
  fill5: "#ecf0f1",
  fill6: "#34495e",
  fill7: "#95a5a6",
  fill8: "#34495e",
};

// B
const IconBook = (args) => <Book {...args} />;
export const book = IconBook.bind({});
book.args = {
  additionalClass: "",
  viewBox: "0 0 128 128",
  height: "150px",
  width: "150px",
  fill1: "#2d3e50",
  fill2: "#2e79bd",
};

// C

const IconCalendar = (args) => <Calendar {...args} />;
export const calendar = IconCalendar.bind({});
calendar.args = {
  additionalClass: "",
  viewBox: "0 0 512 512",
  width: 100,
  height: 100,
  fill: "#000",
};

const IconCamera1 = (args) => <Camera1 {...args} />;
export const camera1 = IconCamera1.bind({});
camera1.args = {
  additionalClass: "",
  height: "150px",
  width: "150px",
  viewBox: "0 0 64 64",
  fill: "#000",
};

const IconCamera2 = (args) => <Camera2 {...args} />;
export const camera2 = IconCamera2.bind({});
camera2.args = {
  additionalClass: "",
  height: "150px",
  width: "150px",
  viewBox: "0 0 24 24",
  fill: "none",
  strokePath: "#009900",
  circleFill: "#0099",
  pathFill: "",
  strokeLine: "#000",
};

const IconCameraWithBackFill = (args) => <CameraWithBackFill {...args} />;
export const cameraWithBackFill = IconCameraWithBackFill.bind({});
cameraWithBackFill.args = {
  additionalClass: "",
  viewBox: "0 0 512 512",
  width: "100",
  height: "100",
  fill: "#c5e9f9",
};

const IconChevronRight = (args) => <ChevronRight {...args} />;
export const chevronRight = IconChevronRight.bind({});
chevronRight.args = {
  additionalClass: "",
  width: "7px",
  height: "12px",
  viewBox: "0 0 7 12",
  fill: "#1D1D1D",
};

const IconCheck = (args) => <Check {...args} />;
export const check = IconCheck.bind({});
check.args = {
  additionalClass: "",
  viewBox: "0 0 80.588 61.158",
  width: "100",
  height: "100",
  fill: "#231f20",
};

const IconCheckCircledOffset = (args) => <CheckCircledOffset {...args} />;
export const checkCircledOffset = IconCheckCircledOffset.bind({});
checkCircledOffset.args = {
  additionalClass: "",
  viewBox: "0 0 24 24",
  width: "100",
  height: "100",
  stroke: "#231f20",
  strokeWidth: 2,
};

const IconCheckWithSquareFill = (args) => <CheckWithSquareFill {...args} />;
export const checkWithSquareFill = IconCheckWithSquareFill.bind({});
checkWithSquareFill.args = {
  additionalClass: "",
  viewBox: "0 0 25 25",
  width: 50,
  height: 50,
  fill: "#1D1D1D",
  strokeWidth: 2,
};

const IconChevronLeft = (args) => <ChevronLeft {...args} />;
export const chevronLeft = IconChevronLeft.bind({});
chevronLeft.args = {
  additionalClass: "",
  viewBox: "0 0 25 25",
  width: 30,
  height: 50,
  fill: "#1D1D1D",
  opacity: 0.87,
  strokeWidth: 2
};

const IconCircledCheck = (args) => <CircledCheck {...args} />;
export const circledCheck = IconCircledCheck.bind({});
circledCheck.args = {
  additionalClass: "",
  fill: "aqua",
  stroke: "blueviolet",
  strokeWidth: "2px",
  height: "150px",
  width: "150px",
  viewBox: "0 0 24 24",
};

const IconClose = (args) => <Close {...args} />;
export const close = IconClose.bind({});
close.args = {
  additionalClass: "",
  viewBox: "0 0 25 25",
  width: 50,
  height: 50,
  fill: "#000",
};

const IconCloseWithFill = (args) => <CloseWithFill {...args} />;
export const closeWithFill = IconCloseWithFill.bind({});
closeWithFill.args = {
  additionalClass: "",
  viewBox: "0 0 72.434 72.44",
  width: 50,
  height: 50,
  fill: "#000",
};

const IconCloseWithStrokeBack = (args) => <CloseWithStrokeBack {...args} />;
export const closeWithStrokeBack = IconCloseWithStrokeBack.bind({});
closeWithStrokeBack.args = {
  additionalClass: "",
  viewBox: "0 0 78.667 78.67",
  width: 50,
  height: 50,
  fill1: "#000",
  fill2: "#0099",
};

const IconComment = (args) => <Comment {...args} />;
export const comment = IconComment.bind({});
comment.args = {
  additionalClass: "",
  viewBox: "0 0 525 525",
  width: 100,
  height: 100,
  fill: "#000",
};

const IconCommentCheck = (args) => <CommentCheck {...args} />;
export const commentCheck = IconCommentCheck.bind({});
commentCheck.args = {
  additionalClass: "",
  width: "200",
  height: "200",
  viewBox: "0 0 24 24",
  fill: "#000",
  stroke: "transparent",
};

const IconCommentCrossed = (args) => <CommentCrossed {...args} />;
export const commentCrossed = IconCommentCrossed.bind({});
commentCrossed.args = {
  additionalClass: "",
  fill: "#000",
  height: "150px",
  width: "150px",
  viewBox: "0 0 32 32",
  stroke: "blue",
};

const IconCommentExclamation = (args) => <CommentExclamation {...args} />;
export const commentExclamation = IconCommentExclamation.bind({});
commentExclamation.args = {
  additionalClass: "",
  viewBox: "0 0 24 24",
  width: "150px",
  fill: "#009900",
  stroke: "#000",
};

const IconCommentMulti = (args) => <CommentMulti {...args} />;
export const commentMulti = IconCommentMulti.bind({});
commentMulti.args = {
  additionalClass: "",
  viewBox: "0 0 525 525",
  width: 100,
  height: 100,
  fill1: "#000",
  fill2: "#009",
};

const IconCommentWithPencil = (args) => <CommentWithPencil {...args} />;
export const commentWithPencil = IconCommentWithPencil.bind({});
commentWithPencil.args = {
  additionalClass: "",
  viewBox: "0 0 24 24",
  width: 100,
  height: 100,
  fill: "#000",
};

// D
const IconDribbble = (args) => <Dribbble {...args} />;
export const dribbble = IconDribbble.bind({});
dribbble.args = {
  additionalClass: "",
  viewBox: "0 0 512 512",
  width: 100,
  height: 100,
  fill: "#ff3d80",
};

const IconDribbbleWithFill = (args) => <DribbbleWithFill {...args} />;
export const dribbbleWithFill = IconDribbbleWithFill.bind({});
dribbbleWithFill.args = {
  additionalClass: "",
  viewBox: "0 0 40.9 40.4",
  width: 100,
  height: 100,
  fill1: "#2DABE2",
  fill2: "#fff",
};

// E

const IconEnvelopeClosed = (args) => <EnvelopeClosed {...args} />;
export const envelopeClosed = IconEnvelopeClosed.bind({});
envelopeClosed.args = {
  additionalClass: "",
  width: "50px",
  height: "50px",
  viewBox: "0 0 500 500",
  fill1: "red",
  fill2: "blue",
};

const IconEnvelopeOpen = (args) => <EnvelopeOpen {...args} />;
export const envelopeOpen = IconEnvelopeOpen.bind({});
envelopeOpen.args = {
  additionalClass: "",
  width: "150px",
  height: "150px",
  viewBox: "0 0 50 50",
  fill: "#000",
};

// F
// const IconFacebookWithRoundFill = (args) => <FacebookWithRoundFill {...args} />;
// export const facebookWithRoundFill = IconFacebookWithRoundFill.bind({});
// facebookWithRoundFill.args = {
//   additionalClass: "",
//   viewBox: "0 0 115 115",
//   width: 100,
//   height: 100,
//   fill1: "#3b5998",
//   fill2: "#fff",
// };

const IconFacebookWithSquareBackFill = (args) => (
  <FacebookWithSquareBackFill {...args} />
);
export const facebookWithSquareBackFill = IconFacebookWithSquareBackFill.bind(
  {}
);
facebookWithSquareBackFill.args = {
  additionalClass: "",
  viewBox: "0 0 72 72",
  width: 72,
  height: 72,
  widthRect: 72,
  heightRect: 72,
  fill1: "#3b5998",
  fill2: "#fff",
};

const IconFolder2D = (args) => <Folder2D {...args} />;
export const folder2D = IconFolder2D.bind({});
folder2D.args = {
  additionalClass: "",
  viewBox: "0 0 25 25",
  width: 100,
  height: 100,
  fill1: "#2980b9",
  fill2: "#2980b9",
  fill3: "#bdc3c7",
  fill4: "#3498db",
  fill5: "#2980b9",
};

// H

const IconHeartBroken = (args) => <HeartBroken {...args} />;
export const heartBroken = IconHeartBroken.bind({});
heartBroken.args = {
  additionalClass: "",
  viewBox: "0 0 50 50",
  width: 100,
  height: 100,
};

const IconHeartBrokenMultiColor = (args) => <HeartBrokenMultiColor {...args} />;
export const heartBrokenMultiColor = IconHeartBrokenMultiColor.bind({});
heartBrokenMultiColor.args = {
  additionalClass: "",
  viewBox: "0 0 512.008 512.008",
  width: 100,
  height: 100,
  fill1: "#ff415b",
  fill2: "#e50058",
};

const IconHeartFilled = (args) => <HeartFilled {...args} />;
export const heartFilled = IconHeartFilled.bind({});
heartFilled.args = {
  additionalClass: "",
  fill: "#009900",
  stroke: "#000",
  height: "150px",
  width: "150px",
  viewBox: "0 0 24 24",
};

const IconHome = (args) => <Home {...args} />;
export const home = IconHome.bind({});
home.args = {
  additionalClass: "",
  width: "200",
  height: "200",
  viewBox: "0 0 460.298 460.297",
  fill1: "#E7ECED",
  fill2: "#556080",
};

// I

const IconImage = (args) => <Image {...args} />;
export const image = IconImage.bind({});
image.args = {
  additionalClass: "",
  viewBox: "0 0 25 25",
  width: 100,
  height: 96,
  fill: "#000",
};

const IconInfoStroke = (args) => <InfoStroke {...args} />;
export const infoStroke = IconInfoStroke.bind({});
infoStroke.args = {
  additionalClass: "",
  viewBox: "0 0 25 25",
  width: 100,
  height: 100,
  stroke: "currentColor",
  strokeWidth: 2,
};

const IconInstagram = (args) => <Instagram {...args} />;
export const instagram = IconInstagram.bind({});
instagram.args = {
  additionalClass: "",
  stroke: "#000",
  width: "100px",
  viewBox: "0 0 24 24",
};

const IconInstagramWithBackFill = (args) => <InstagramWithBackFill {...args} />;
export const instagramWithBackFill = IconInstagramWithBackFill.bind({});
instagramWithBackFill.args = {
  additionalClass: "",
  viewBox: "0 0 72 72",
  width: 100,
  height: 100,
  fill1: "#000",
  fill2: "#fff",
};

// M
const IconMedkit = (args) => <Medkit {...args} />;
export const medkit = IconMedkit.bind({});
medkit.args = {
  additionalClass: "",
  fill: "aquamarine",
  stroke: "black",
  strokeWidth: "10px",
  width: "150px",
  height: "150px",
  viewBox: "0 0 511.626 511.627",
};

const IconMedkitMultiColor = (args) => <MedkitMultiColor {...args} />;
export const medkitMultiColor = IconMedkitMultiColor.bind({});
medkitMultiColor.args = {
  additionalClass: "",
  viewBox: "0 0 512 512",
  width: 100,
  height: 100,
  fill1: "#7a7780",
  fill2: "#57555c",
  fill3: "#fd3c65",
  fill4: "#fd003a",
  fill5: "#3c3b40",
  fill6: "#29292c",
  fill7: "#e1e4fb",
  fill8: "#7a7780",
  fill9: "#57555c",
  fill10: "#c5c9f7",
};

const IconMenu = (args) => <Menu {...args} />;
export const menu = IconMenu.bind({});
menu.args = {
  additionalClass: "",
  viewBox: "0 0 512 512",
  width: 50,
  height: 50,
};

// P

const IconPencil = (args) => <Pencil {...args} />;
export const pencil = IconPencil.bind({});
pencil.args = {
  additionalClass: "",
  viewBox: "0 0 24 24",
  width: 100,
  height: 100,
  fill1: "#7a7780",
  stroke: "#000",
};

const IconPencilFilledColored = (args) => <PencilFilledColored {...args} />;
export const pencilFilledColored = IconPencilFilledColored.bind({});
pencilFilledColored.args = {
  additionalClass: "",
  width: "150px",
  height: "150px",
  viewBox: "0 0 512 512",
  circle: "#FFDF47",
  fillPath1: "#FEC000",
  fillPath2: "#FF0335",
  fillPath3: "#C2001B",
  fillRect1: "#FFFFFF",
  fillRect2: "#C8C6CC",
  fillPolygon1: "#E67500",
  fillPolygon2: "#9A4C00",
  fillPolygon3: "#FFC473",
  fillPolygon4: "#FFDF47",
  fillPolygon5: "#57555C",
  fillPolygon6: "#171719",
};

const IconPencilMultiColor = (args) => <PencilMultiColor {...args} />;
export const pencilMultiColor = IconPencilMultiColor.bind({});
pencilMultiColor.args = {
  additionalClass: "",
  viewBox: "0 0 512 512",
  width: 100,
  height: 100,
  fill1: "#e39700",
  fill2: "#f3edbf",
  fill3: "#ffcb43",
  fill4: "#e0a370",
  fill5: "#f3edbf",
};

const IconPhotosInARow = (args) => <PhotosInARow {...args} />;
export const photosInARow = IconPhotosInARow.bind({});
photosInARow.args = {
  additionalClass: "",
  viewBox: "0 0 100 100",
  width: 104,
  height: 94,
  stroke: "#263238",
  strokeWidth: 3.5,
};

const IconPhotosInARowMultiColor = (args) => (
  <PhotosInARowMultiColor {...args} />
);
export const photosInARowMultiColor = IconPhotosInARowMultiColor.bind({});
photosInARowMultiColor.args = {
  additionalClass: "",
  viewBox: "0 0 100 100",
  width: 104,
  height: 94,
  strokeWidth: 3.5,
  stroke: "#000",
  fill1: "#FFF",
  fill2: "#7BE380",
  fill3: "#F7E07E",
  fill4: "#EBF1F5",
};

const IconPlus = (args) => <Plus {...args} />;
export const plus = IconPlus.bind({});
plus.args = {
  additionalClass: "",
  viewBox: "0 0 401.994 401.994",
  width: 50,
  height: 50,
};

// R

const IconRefresh = (args) => <Refresh {...args} />;
export const refresh = IconRefresh.bind({});
refresh.args = {
  additionalClass: "",
  viewBox: "0 0 50 50",
  width: 40.5,
  height: 42.17,
  fill: "#000",
};

// S

const IconSearch = (args) => <Search {...args} />;
export const search = IconSearch.bind({});
search.args = {
  additionalClass: "",
  viewBox: "0 0 25 25",
  width: 50,
  height: 50,
  fill: "#000",
};

// T
const IconTrashcanX = (args) => <TrashcanX {...args} />;
export const trashcanX = IconTrashcanX.bind({});
trashcanX.args = {
  additionalClass: "",
  fill: "#000",
  height: "150px",
  width: "150px",
  viewBox: "0 0 32 32",
  stroke: "transparent",
};

const IconTrashMultiColor = (args) => <TrashMultiColor {...args} />;
export const trashMultiColor = IconTrashMultiColor.bind({});
trashMultiColor.args = {
  additionalClass: "",
  viewBox: "0 0 64 64",
  width: 50,
  height: 50,
  fill1: "#316CFF",
  fill2: "#8EB6CE",
  fill3: "#A3D5E8",
  fill4: "#6F8BB5",
};

const IconTrashOpen = (args) => <TrashOpen {...args} />;
export const trashOpen = IconTrashOpen.bind({});
trashOpen.args = {
  additionalClass: "",
  viewBox: "0 0 128 128",
  width: 50,
  height: 50,
  fill1: "#2e79bd",
  fill2: "#2d3e50",
};

const IconTumblrWithBackFill = (args) => <TumblrWithBackFill {...args} />;
export const tumblrWithBackFill = IconTumblrWithBackFill.bind({});
tumblrWithBackFill.args = {
  additionalClass: "",
  viewBox: "0 0 112.197 112.197",
  width: 50,
  height: 50,
  fill1: "#395976",
  fill2: "#f1f2f2",
};

const IconTwitter = (args) => <Twitter {...args} />;
export const twitter = IconTwitter.bind({});
twitter.args = {
  additionalClass: "",
  viewBox: "0 0 512 512",
  width: 50,
  height: 50,
  fill: "#03a9f4",
};

const IconTwitterWithBackFillSquare = (args) => (
  <TwitterWithBackFillSquare {...args} />
);
export const twitterWithBackFillSquare = IconTwitterWithBackFillSquare.bind({});
twitterWithBackFillSquare.args = {
  additionalClass: "",
  viewBox: "0 0 75 75",
  width: 50,
  height: 50,
  fill1: "#55ACEE",
  fill2: "#fff",
};

const IconTwitterWithRoundFill = (args) => <TwitterWithRoundFill {...args} />;
export const twitterWithRoundFill = IconTwitterWithRoundFill.bind({});
twitterWithRoundFill.args = {
  additionalClass: "",
  viewBox: "0 0 50 50",
  width: 48,
  height: 48,
  fill1: "#55ACEE",
  fill2: "#fff",
};

// W

const IconWarningExclamation = (args) => <WarningExclamation {...args} />;
export const warningExclamation = IconWarningExclamation.bind({});
warningExclamation.args = {
  additionalClass: "",
  viewBox: "0 0 50 50",
  width: 47.57,
  height: 38.84,
  fill: "#d3d4ed",
};

const IconWrench = (args) => <Wrench {...args} />;
export const wrench = IconWrench.bind({});
wrench.args = {
  additionalClass: "",
  width: "150px",
  height: "150px",
  viewBox: "0 0 469.09 469.089",
  path1Fill: "#00ff",
  path1Stroke: "#000",
  path2Fill: "#009900",
  path2Stroke: "#000",
  strokeWidth1: "",
  strokeWidth2: "",
};

const IconWrenchesCrossed = (args) => <WrenchesCrossed {...args} />;
export const wrenchesCrossed = IconWrenchesCrossed.bind({});
wrenchesCrossed.args = {
  additionalClass: "",
  width: 100,
  height: 100,
  viewBox: "0 0 64 64",
  fill: "#000",
  stroke1: "transparent",
  stroke2: "transparent",
  stroke3: "transparent",
};

const IconWrenchScrewCrossed = (args) => <WrenchScrewCrossed {...args} />;
export const wrenchScrewCrossed = IconWrenchScrewCrossed.bind({});
wrenchScrewCrossed.args = {
  additionalClass: "",
  height: 100,
  width: 100,
  viewBox: "0 0 32 32",
  strokePath1: "#000000",
  strokePath2: "#000000",
  strokePath3: "#000000",
  strokePolygon1: "#000000",
};

export default Icons;
