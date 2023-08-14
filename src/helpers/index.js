export function getYoutubeTrailer(movie) {
  switch (movie.title) {
    case "Castle in the Sky":
      return "https://youtu.be/8ykEy-yPBFc";
    case "Grave of the Fireflies":
      return "https://youtu.be/4vPeTSRd580";
    case "My Neighbor Totoro":
      return "https://youtu.be/92a7Hj0ijLs";
    case "Kiki's Delivery Service":
      return "https://youtu.be/4bG17OYs-GA";
    case "Only Yesterday":
      return "https://youtu.be/OfkQlZArxw0";
    case "Porco Rosso":
      return "https://youtu.be/awEC-aLDzjs";
    case "Pom Poko":
      return "https://youtu.be/_7cowIHjCD4";
    case "Whisper of the Heart":
      return "https://youtu.be/0pVkiod6V0U";
    case "Princess Mononoke":
      return "https://youtu.be/4OiMOHRDs14";
    case "My Neighbors the Yamadas":
      return "https://youtu.be/1C9ujuCPlnY";
    case "Spirited Away":
      return "https://youtu.be/ByXuk9QqQkk";
    case "The Cat Returns":
      return "https://youtu.be/Gp-H_YOcYTM";
    case "Howl's Moving Castle":
      return "https://youtu.be/iwROgK94zcM";
    case "Tales from Earthsea":
      return "https://youtu.be/8hxYx3Jq3kI";
    case "Ponyo":
      return "https://youtu.be/CsR3KVgBzSM";
    case "Arrietty":
      return "https://youtu.be/9CtIXPhPo0g";
    case "From Up on Poppy Hill":
      return "https://youtu.be/9nzpk_Br6yo";
    case "The Wind Rises":
      return "https://youtu.be/RzSpDgiF5y8";
    case "The Tale of the Princess Kaguya":
      return "https://youtu.be/W71mtorCZDw";
    case "When Marnie Was There":
      return "https://youtu.be/jjmrxqcQdYg";
    case "The Red Turtle":
      return "https://youtu.be/4lwrzNqEUOM";
    case "Earwig and the Witch":
      return "https://youtu.be/_PfhotgXEeQ";
    default:
      break;
  }
}

export function getNetflixId(movie) {
  switch (movie.title) {
    case "Castle in the Sky":
      return 60027393;
    case "Grave of the Fireflies":
      return undefined;
    case "My Neighbor Totoro":
      return 60032294;
    case "Kiki's Delivery Service":
      return 60027106;
    case "Only Yesterday":
      return 80092922;
    case "Porco Rosso":
      return 70019060;
    case "Pom Poko":
      return 70035036;
    case "Whisper of the Heart":
      return 70045021;
    case "Princess Mononoke":
      return 28630857;
    case "My Neighbors the Yamadas":
      return 70035035;
    case "Spirited Away":
      return 60023642;
    case "The Cat Returns":
      return 70019058;
    case "Howl's Moving Castle":
        return 70028883;
    case "Tales from Earthsea":
      return 70142821;
    case "Ponyo":
      return 70106454;
    case "Arrietty":
      return 70216227;
    case "From Up on Poppy Hill":
      return 70262786;
    case "The Wind Rises":
      return 70293674;
    case "The Tale of the Princess Kaguya":
      return 80013552;
    case "When Marnie Was There":
      return 80036398;
    case "The Red Turtle":
      return undefined;
    case "Earwig and the Witch":
      return 81316559;
    default:
      break;
  }
}
