import { PineconeLogo } from "../icons/PineconeLogo";
export function Step4() {
  return (
    <div>
      <div className="background">
        <div className="flex flex-col items-start w-120 rounded-lg bg-white p-8 ">
          <div className="flex flex-col w-104 items-start gap-2">
            <PineconeLogo />
            <div className="joinUs">You're All Set 🔥</div>
            <div className="description ">
              We have received your submission. Thank you!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
