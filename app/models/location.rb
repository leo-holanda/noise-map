class Location < ApplicationRecord
  validates :address, :latitude, :longitude, presence: true

  geocoded_by :address
  after_initialize :geocode
end
