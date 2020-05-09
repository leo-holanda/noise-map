class Complaint < ApplicationRecord
  before_save :update_count
  belongs_to :noise_type

  validates :latitude, :longitude, :noise_type_id, :description, presence: true
  validates :description, length: { maximum: 280 }

  def created_at
    self[:created_at].strftime("%d/%m/%Y | %H:%M")
  end

  private

  def update_count
    @noise_type = NoiseType.find(self.noise_type_id)
    @noise_type.increment_count
  end
end
