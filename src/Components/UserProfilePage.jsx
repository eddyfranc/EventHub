import React from "react";

export default function UserProfilePage() {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-slate-50 overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex grow flex-col">
        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-80">
            <div className="flex h-full min-h-[700px] flex-col justify-between bg-slate-50 p-4">
              <div className="flex flex-col gap-4">
                <div className="flex gap-3">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDPz_zxT4tYCEOtA9C5K1iOFhscWvUKCuD9L8alQsoviPYjTzaWh0h2LylUnKMpsYvrIQTURHf0aSa8F9f8VQ3lPN7Q-DgZeIUzdQu2qtrHRG-nNev634U8R_8H3apWu3xPcp2JwRQPPMWuMplqqX9GdLJWRKEcYO8lxLHp_9KgeHDXAxeA0GZ57fYXWVcP3kSjpmScnrrSu0pliKrAZg2bCN4BK30bmp0ko6IHjdRdbnz2mtidCrMEgocwW5ws6boaDPhZqUx7cZ1x")'
                    }}
                  ></div>
                  <h1 className="text-[#0d141c] text-base font-medium leading-normal">
                    Sophia Carter
                  </h1>
                </div>
                <div className="flex flex-col gap-2">
                  {[
                    { label: "Home", icon: "House" },
                    { label: "Explore", icon: "MagnifyingGlass" },
                    { label: "Create", icon: "Plus" },
                    { label: "Tickets", icon: "Ticket" },
                    { label: "Profile", icon: "UserCircle", active: true },
                  ].map(({ label, icon, active }) => (
                    <div
                      key={label}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg ${
                        active ? "bg-[#e7edf4]" : ""
                      }`}
                    >
                      <div className="text-[#0d141c]">
                        <i>{icon}</i>
                      </div>
                      <p className="text-[#0d141c] text-sm font-medium leading-normal">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Profile Right Content */}
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#0d141c] text-[32px] font-bold leading-tight">Profile</p>
                <p className="text-[#49739c] text-sm font-normal leading-normal">Manage your account and settings</p>
              </div>
            </div>

            <div className="flex p-4">
              <div className="flex w-full flex-col gap-4 md:flex-row md:justify-between md:items-center">
                <div className="flex gap-4">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDIliduwlrz7jFVu1muVFiI6Xmtb4Mo3_xvZMsRBCVOWfM1Yab8Kp8A-KHnPdcCvpDWZFCNF0dRFmi7dfG3p4rtc-m4b1CoII5MRdTXFM-NKcweeNNNJimSdk_a-JZLiA1ifJv9hy3mDcM0xdW2Cf1PqavnheZOGLl3P4t1eDZAfreypb2jSr_6m3MkN3W4dA8fV9NvxQ3ORYq4HNLc3Djm2wjYjEW7_kPz4dFkau9TcBgjPX8QUS2Sf3j2Xn1XkkjXBEf-rE9t29in")'
                    }}
                  ></div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[#0d141c] text-[22px] font-bold leading-tight tracking-[-0.015em]">
                      Sophia Carter
                    </p>
                    <p className="text-[#49739c] text-base font-normal leading-normal">Joined in 2021</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Reusable section titles and messages */}
            {["Upcoming Events", "Ticket History"].map((section) => (
              <div key={section}>
                <h2 className="text-[#0d141c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                  {section}
                </h2>
                <div className="flex flex-col px-4 py-6">
                  <div className="flex flex-col items-center gap-6">
                    <div
                      className="bg-center bg-no-repeat aspect-video bg-cover rounded-lg w-full max-w-[360px]"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDXZ0Omj_dn1W0pt-KB6arJbl4aB3H41wbAVr6KDBPZf6c4cpDGsYq-ujjAqf3_HytPe0H6htWOmpevrBQ0FNeYk12d6UIu3p3XrSUsqaBvyabuYv3rEZL9YYLQuh5p8NYBGtop53Yu92HnWO8qJaP1MMk5sNt2cpo5sWl4cX0pAYD2vaC4pF2368B6GoP5cxOVUWQ7PcH3Dc8Q5cc0bZhpuIvuqSsxwA1kNIly-7OivPdR4llDxENM_Cvn83jwT0sm0kjK9fAA2An3")'
                      }}
                    ></div>
                    <div className="flex max-w-[480px] flex-col items-center gap-2">
                      <p className="text-[#0d141c] text-lg font-bold leading-tight text-center">
                        No {section.toLowerCase()}
                      </p>
                      <p className="text-[#0d141c] text-sm font-normal text-center">
                        You don't have any {section.toLowerCase()}. Explore events and find something you're interested in.
                      </p>
                    </div>
                    <button className="rounded-lg h-10 px-4 bg-[#e7edf4] text-[#0d141c] text-sm font-bold">
                      Explore Events
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <h2 className="text-[#0d141c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Account Settings
            </h2>

            {[
              { title: "Edit Profile", desc: "Update your profile information" },
              { title: "Payment Methods", desc: "Manage your payment methods" },
              { title: "Change Password", desc: "Change your password" },
              { title: "Notifications", desc: "Manage your notification preferences" },
              { title: "Privacy", desc: "Manage your privacy settings" },
              { title: "Help Center", desc: "Get help with EventHub" },
              { title: "Log Out" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2 justify-between">
                <div className="flex flex-col justify-center">
                  <p className="text-[#0d141c] text-base font-medium line-clamp-1">{item.title}</p>
                  {item.desc && (
                    <p className="text-[#49739c] text-sm font-normal line-clamp-2">{item.desc}</p>
                  )}
                </div>
                <div className="shrink-0 text-[#0d141c]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
