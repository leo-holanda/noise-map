class CreateComplaints < ActiveRecord::Migration[5.2]
  def change
    create_table :complaints do |t|
      t.decimal :latitude, precision: 10, scale: 6 , null: false
      t.decimal :longitude, precision: 10, scale: 6 , null: false
      t.text :description
      t.integer :noise_type, null: false
      t.timestamps
    end
  end
end
