class CreateDiagnoses < ActiveRecord::Migration[5.2]
  def change
    create_table :diagnoses do |t|
      t.string :name
      t.string :prof_name
      t.text :short_description
      t.text :full_description
      t.text :medical_condition
      t.text :treatment_description
      t.string :possible_symptoms
      t.text :specializations
      t.integer :user_id

      t.timestamps
    end
  end
end
