class AddNoiseTypeReferenceToComplaints < ActiveRecord::Migration[5.2]
  def change
    remove_column :complaints, :noise_type
    add_reference :complaints, :noise_type, foreign_key: true
  end
end
