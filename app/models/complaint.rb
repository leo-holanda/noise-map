class Complaint < ApplicationRecord
  validates :latitude, :longitude, :noise_type, presence: true
  validates :description, length: { maximum: 280 }
end
