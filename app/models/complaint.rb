class Complaint < ApplicationRecord
  before_save :update_count

  validates :latitude, :longitude, :noise_type, :description, presence: true
  validates :description, length: { maximum: 280 }

  def created_at
    self[:created_at].strftime("%d/%m/%Y | %H:%M")
  end

  private

  def update_count
    @noise_type = NoiseType.find(self.noise_type)
    @noise_type.increment_count
  end
end
