import React from "react";
import { GuarianInfo } from "../guarians";
import { GuarianImagePack, GuarianMaterial } from "../guarianImagePack";
import emblem from "./images/emblem.png";
import listEmblem from "./images/emblemSide.png";
import listIcon from "./images/icon.png";
import ref from "./images/enduarFluffy.png";

const skewedText = "No reality should be capable of something like this";
const repeatedText = `Something about this guarian is beyond comprehension. This shouldn't be possible, something
        like this, someone like this. They know everything that there is to know, they understand
        more than I can possibly even capture within myself. This can't be right. The guarians
        shouldn't even be capaable of something like this, and yet here they are. No matter how hard
        I try, I cannot understand what's causing this, what's creating this. I simply look forth,
        and find that I am at peace with him, in a way that I can't explain, for reasons I don't
        know. Something about this is just so perfect and I want to explain why so badly, but I try
        and I try and it never comes forth. There's so much more. I don't even know where to start.`;

export const enduar: GuarianInfo = {
  name: "Enduar",
  notes: (
    <ul className="big-list">
      <li>
        p͏̘e̳͙̘̣r̖̬̻̦̜̭͓f̹̥̙̜̗e̗͚c͙͞t ̡͍̹͍p̻e͔r̜̀f̘̺̩̞̹̘e̘͜c̴t̛ ͏̭͉p̩̖̩ͅẹ̖̪͔͇͢r̪̪̺̦̠̕f̡̦̭̬̫̲̯e͚̜̻͖͞c̛̗̜̬̱t̶̙ ̛͎̬̗̲p̸̲è̠͙̣̪̯̘r̪̦͈̙̖f͙͈̩̦͉e̦͔͢c҉͉͉͓͕t̴͔͔̩̠͔ͅ ̞p͈̱̱͚e͇͟r̥̺f͇̠̮͉̦͘e̹̖̦̙ç͖̰t̡̩̩ ̟̳͚͘p̡̳̗e̢̞̗̤̠̺͈̭r̻̗̱̭f̧̭̣͕̜e̥͇̲̺̝ͅc̳͉̠͟t҉ͅ ͕̤͔̙̠̣̣pe̼͍̲̦͚͖̕ͅr͉̘f̬͉ec̣t̸͍̗̗̬̠͚̹ ̼͚p͉͖͘ḛ̠̮͍͔r̢̗f̠͉̼͓̜͉ẹ͓̩̘̭͡c̢͕͔̮̗̟ț̘̖͇ ̬̙̞͙p̸̦̮̼̻̯e̙r̨̦̤̱̰̭͙̥f͎͖̘̱e̩ͅc͍̫̼̪͉̲t̝̠ ̩p̸̗̣̪̯e̦̟͖̼͍͇͍͟ṛf͚͉e̞͔͎c̼͎̰͝t̶ ̭͙̻̹p̶͎̖̹̩̤̻̩e͎̻͞r̨͈̮̲f̙̫͉̲̜̬̕e̺̹̙̯̻c͎̩̖̪̮͉̙t͖̩̖̥̳
      </li>
      <li style={{ height: 35, transform: "rotate(4deg)" }}>
        {skewedText}
        <br />
        {skewedText}
        <br />
        {skewedText}
        <br />
        {skewedText}
        <br />
        {skewedText}
        <br />
        {skewedText}
        <br />
        {skewedText}
      </li>
      <li>Farther than any other can see</li>
      <li>No one will ever hurt you ever again</li>
      <li style={{ fontSize: 72, fontWeight: "bold" }}>T͜H̴̴̶̕E̸̶̡͠Y̢͠͞ ̶̴̡̕K̡͏N͡͞҉̴͢O̵҉W͏̴͜͠</li>
      <li style={{ paddingTop: 10 }}>♥</li>
    </ul>
  ),
  description: (
    <>
      <p style={{ height: 0, lineHeight: 0.5, transform: "rotate(-5deg)" }}>{repeatedText}</p>
      <p style={{ height: 0, lineHeight: 0.8, transform: "rotate(3.5deg)" }}>{repeatedText}</p>
      <p style={{ height: 0, lineHeight: 1.22, transform: "rotate(-1deg)" }}>{repeatedText}</p>
      <p style={{ height: 0, lineHeight: 1, transform: "rotate(4deg)" }}>{repeatedText}</p>
    </>
  ),
  secret: true,
  images: {
    emblems: {
      full: emblem,
      list: listEmblem,
      icon: listIcon,
    },
    refs: [
      {
        material: GuarianMaterial.Fluffy,
        ref,
      },
    ],
    maxRefWidth: 852,
  },
};
