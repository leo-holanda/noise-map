class Complaint < ApplicationRecord
  validates :latitude, :longitude, :noise_type, :description, presence: true
  validates :description, length: { maximum: 280 }

  def get_noise_type()
    case self.noise_type
    when 1
      "Disparo de alarmes"
    when 2
      "Música alta"
    when 3
      "Obras de construção civil"
    when 4
      "Ruídos de vizinhos"
    when 5
      "Tráfego de veículos"
    end
  end

  def created_at
    self[:created_at].strftime("%d/%m/%Y | %H:%M")
  end
end
