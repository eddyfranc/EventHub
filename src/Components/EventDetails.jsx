import React from 'react';
import { Link } from 'react-router-dom'; 
function EventDetails() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        {/* Main Content Area */}
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Breadcrumbs */}
            <div className="flex flex-wrap gap-2 p-4">
              <Link className="text-[#49739c] text-base font-medium leading-normal" to="/events">Events</Link>
              <span className="text-[#49739c] text-base font-medium leading-normal">/</span>
              <span className="text-[#0d141c] text-base font-medium leading-normal">Tech Conference</span>
            </div>

            {/* Event Hero Section */}
            <div className="@container">
              <div className="@[480px]:px-4 @[480px]:py-3">
                <div
                  className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-slate-50 @[480px]:rounded-lg min-h-80"
                  style={{ backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAtvwTwJonfCx5DzN9b7Sd3gtKUV16FZNUoffPkyOu8QwfYynMUYHoh5xzLy4s0-abF37opvf0BVTEYT0w7s_Z9uFaty3TAhQaQHgr0tavq--XVK52d72o3qfY_0pPm7gAF4gdWIumjIL1MfrHhNZZb5oP4TQ8i2IjT2hiv9LKnhYj5nSIaznv8Pf-xWptnjKn42itnigC_FogoE6uWEOPwMGGSpOLrvTtZ3Y7NLkk8FZWOvnWY5p4954UDpFw692HDA5th-ui8tpiY")' }}
                  // If using imported image:
                  // style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%), url(${eventImage})` }}
                >
                  <div className="flex p-4"><p className="text-white tracking-light text-[28px] font-bold leading-tight">Tech Conference 2024</p></div>
                </div>
              </div>
            </div>

            {/* Event Details Navigation (About, Speakers, Attendees) */}
            <div className="pb-3">
              <div className="flex border-b border-[#cedbe8] px-4 gap-8">
                <Link className="flex flex-col items-center justify-center border-b-[3px] border-b-[#3d98f4] text-[#0d141c] pb-[13px] pt-4" to="#">
                  <p className="text-[#0d141c] text-sm font-bold leading-normal tracking-[0.015em]">About</p>
                </Link>
                <Link className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#49739c] pb-[13px] pt-4" to="#">
                  <p className="text-[#49739c] text-sm font-bold leading-normal tracking-[0.015em]">Speakers</p>
                </Link>
                <Link className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#49739c] pb-[13px] pt-4" to="#">
                  <p className="text-[#49739c] text-sm font-bold leading-normal tracking-[0.015em]">Attendees</p>
                </Link>
              </div>
            </div>

            {/* About this event */}
            <h2 className="text-[#0d141c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">About this event</h2>
            <p className="text-[#0d141c] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Join us for the Tech Conference 2024, a premier event for technology professionals, innovators, and enthusiasts. This conference will feature keynote speeches from
              industry leaders, interactive workshops, and networking opportunities. Explore the latest trends in AI, cybersecurity, and cloud computing, and connect with peers and
              experts in the field.
            </p>

            {/* Date and time */}
            <h2 className="text-[#0d141c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Date and time</h2>
            <p className="text-[#0d141c] text-base font-normal leading-normal pb-3 pt-1 px-4">Fri, Jul 12, 2024, 9:00 AM - Sat, Jul 13, 2024, 5:00 PM</p>

            {/* Location */}
            <h2 className="text-[#0d141c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Location</h2>
            <p className="text-[#0d141c] text-base font-normal leading-normal pb-3 pt-1 px-4">Innovation Center, 456 Tech Drive, San Francisco, CA 94105</p>

            {/* About the organizer */}
            <h2 className="text-[#0d141c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">About the organizer</h2>
            <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBgLlwzPMcwJpo7Y11JAk8VmmLoESWs68RhpPwyEANxqUx1U9IQ0B7fu7dQv6vAPUTNkKqd2ifjRyLCTb_Vr4SHdQUo8hjtgG2ULDkF7tYBETR1OgkxAwaAlKqoFJWESPwtSlwhQibscMwvveycR2stTy1WPBxVH6iY5GMPq8zF5_bFWkBkuyARFlxiUeiBjckwFCGiKKRjNLiJSlCqQRme-K9ywlfLYTerDkcQN4QR2Mped12ZL4OKagJqgfXFHaGBT6tlFJtF0M3i")' }}
                // If using imported image:
                // style={{ backgroundImage: `url(${organizerImage})` }}
              ></div>
              <div className="flex flex-col justify-center">
                <p className="text-[#0d141c] text-base font-medium leading-normal line-clamp-1">Organizer</p>
                <p className="text-[#49739c] text-sm font-normal leading-normal line-clamp-2">Tech Events Inc.</p>
              </div>
            </div>

            {/* Tickets Section */}
            <h2 className="text-[#0d141c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Tickets</h2>
            {/* General Admission */}
            <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2 justify-between">
              <div className="flex flex-col justify-center">
                <p className="text-[#0d141c] text-base font-medium leading-normal line-clamp-1">General Admission</p>
                <p className="text-[#49739c] text-sm font-normal leading-normal line-clamp-2">$299</p>
              </div>
              <div className="shrink-0">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#e7edf4] text-[#0d141c] text-sm font-medium leading-normal w-fit">
                  <span className="truncate">Get tickets</span>
                </button>
              </div>
            </div>
            {/* VIP Pass */}
            <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2 justify-between">
              <div className="flex flex-col justify-center">
                <p className="text-[#0d141c] text-base font-medium leading-normal line-clamp-1">VIP Pass</p>
                <p className="text-[#49739c] text-sm font-normal leading-normal line-clamp-2">$499</p>
              </div>
              <div className="shrink-0">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#e7edf4] text-[#0d141c] text-sm font-medium leading-normal w-fit">
                  <span className="truncate">Get tickets</span>
                </button>
              </div>
            </div>
            {/* All-Access Pass */}
            <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2 justify-between">
              <div className="flex flex-col justify-center">
                <p className="text-[#0d141c] text-base font-medium leading-normal line-clamp-1">All-Access Pass</p>
                <p className="text-[#49739c] text-sm font-normal leading-normal line-clamp-2">$999</p>
              </div>
              <div className="shrink-0">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#e7edf4] text-[#0d141c] text-sm font-medium leading-normal w-fit">
                  <span className="truncate">Get tickets</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;