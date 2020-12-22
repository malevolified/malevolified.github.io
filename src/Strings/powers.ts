import { StringLocalization } from "../Utilties/StringLocalization";

interface PowerStrings {
  summary?: string;
  materialShifting?: string;
  sizeShifting?: string;
}

const powerStrings = new StringLocalization<PowerStrings>({
  en: {
    summary: `As corporeal spirits, while they lack some of the traits commonly known among the ethereal, the guarians have a wide variety of abilities and many more yet to be known. Given their corporeal nature, they are not able to simply float around and pass through walls like a ghost. Once present and perceived, they are bound to the laws of the universe just as you are, but in the moments they leave your perception, things get very interesting.`,

    materialShifting: `As spirits, they are not alive in the conventional sense that we are alive. They do not rely on a beating heart or bated breath, but only the will of their own existence. As such, they are not bound to flesh and blood and instead can be whatever they feel is most suitable, be it soft as your favorite toy or solid is pure obsidian. Guarians can freely and instantly change materials whenever they desire, but can only do so when they are not seen. Your friend may be fluffy one moment and fabric the next. Finally, while some guarians may have a light preference as to what their favorite material may be, as reflections of who they are bound to, most guarians feel no difference between one material and another and will happily occupy whatever form you feel closest to.`,

    sizeShifting: `Just as a guarian may shift in make, they can also instantly shift size as well. Just like the material shifting, the size shift takes place instantly when not looking and varies from guarian to guarian (as well as those who they are bound to).Based on what’s known, while some guarians have been seen enjoying a consistent size, others like to take advantage of the shifting, taking on larger forms whenever they have the space to do so. The actual size range that a guarian can shift to isn’t clearly known as some have demonstrated incredible upper bounds.`,
  },
});

export default powerStrings;
