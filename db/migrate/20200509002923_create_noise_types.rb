class CreateNoiseTypes < ActiveRecord::Migration[5.2]
  def change
    create_table :noise_types do |t|
      t.integer :count, default: 0, null: false
    end
  end
end
