"use client";
import { useEffect, useState } from "react";
import { MapPin, Building, Globe } from "lucide-react";
import Stats from "./Stats";
import Consistency from "./Consistency";
import axios from "axios";
import Image from "next/image";

interface IProfileData {
  college: string;
  email: string;
  userId: number;
  location: string;

  name: string;
  no_of_solved_questions: number;
  rank: number;
  role: string;
  socialmedia: string;
  submission_consistency: string;
}

function Profile() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [profileData, setProfileData] = useState<IProfileData>({
    college: "",
    email: "",
    userId: 1,
    location: "",
    name: "",
    no_of_solved_questions: 0,
    rank: 4,
    role: "",
    socialmedia: "",
    submission_consistency: "",
  });

  const [formData, setFormData] = useState({ ...profileData });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProfileData({ ...formData });
    setIsEditModalOpen(false);
  };

  const openEditModal = () => {
    setFormData({ ...profileData });
    setIsEditModalOpen(true);
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    console.log("Ja rahi hai");
    const response = await axios.get(
      "http://localhost:3100/api/v1/user/profile",
      {
        withCredentials: true,
      },
    );
    setProfileData(response.data.data.user);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center gap-x-8 mb-4">
            <div className="w-12">
              <Image
                className="rounded"
                height={48}
                width={48}
                src={
                  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                }
                alt="profile-pi"
              />
            </div>

            <div className="">
              <h1 className="text-xl font-mmedium flex items-center gap-2">
                {profileData.name} <span className="text-amber-500">🏆</span>
              </h1>
              <p className="mt-1 text-sm">
                Rank <span className="font-medium">194,865</span>
              </p>
            </div>
          </div>

          <button
            className="w-full bg-green-800 hover:bg-green-700 text-white py-2 rounded-md mb-6 transition"
            onClick={openEditModal}
          >
            Edit Profile
          </button>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-gray-400" />
              <span>{profileData.location}</span>
            </div>

            <div className="flex items-center gap-3">
              <Building size={18} className="text-gray-400" />
              <span className="truncate">{profileData.college}</span>
            </div>

            <div className="flex items-center gap-3">
              <Globe size={18} className="text-gray-400" />
              <a
                href={"https://github.com/vinodpr1"}
                target="blank"
                className="text-blue-400 truncate hover:underline"
              >
                {profileData.socialmedia}
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <Stats profileData={profileData} />
          <Consistency />
        </div>
      </div>

      {isEditModalOpen && (
        <EditModal
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          formData={formData}
          setIsEditModalOpen={setIsEditModalOpen}
        />
      )}
    </div>
  );
}

export default Profile;

interface IModal {
  handleSubmit: any;
  handleInputChange: any;
  formData: any;
  setIsEditModalOpen: any;
}

const EditModal = ({
  handleSubmit,
  handleInputChange,
  formData,
  setIsEditModalOpen,
}: IModal) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-lg w-full max-w-md p-4">
        <form onSubmit={handleSubmit}>
          <div className="space-y-2">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-1 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1">
                User ID
              </label>
              <input
                type="text"
                name="userId"
                value={formData.userId}
                onChange={handleInputChange}
                className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-1 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-1 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1">
                University/College
              </label>
              <input
                type="text"
                name="university"
                value={formData.university}
                onChange={handleInputChange}
                className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-1 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1">
                LinkedIn URL
              </label>
              <input
                type="text"
                name="linkedinUrl"
                value={formData.linkedinUrl}
                onChange={handleInputChange}
                className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-1 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <button
              type="button"
              onClick={() => setIsEditModalOpen(false)}
              className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-md transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-green-700 hover:bg-green-600 text-white py-2 rounded-md transition"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
