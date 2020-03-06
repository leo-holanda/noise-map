class Complaint < ApplicationRecord
  validates :latitude, :longitude, :noise_type, :description, presence: true
  validates :description, length: { maximum: 280 }
end
