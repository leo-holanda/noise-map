class NoiseType < ApplicationRecord
  def increment_count
    self.increment!("count", 1)
  end
end
